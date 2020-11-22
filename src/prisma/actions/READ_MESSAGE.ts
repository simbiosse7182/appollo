import {PrismaClient} from "@prisma/client"
import {decodeChatKey} from "../../utils";

type Data = {
    userId: number,
    chatId:number,
    messageId: number
}

export const READ_MESSAGE = async (prisma: PrismaClient, data: Data): Promise<boolean> => {
    const {userId, messageId} = data
    const message = await prisma.message.findFirst({
        where: {
            id: messageId,
            authorId: {
                not: userId
            },
            readed: false
        }, select: {
            chat: {
                select: {
                    id: true,
                    key: true
                }
            }
        }
    })

    if (message) {
        const {chat: {key, id: chatId}} = message
        const chatUsers = decodeChatKey(key)
        if (chatUsers.includes(userId)) {
            await prisma.message.updateMany({
                where: {
                    id: {
                        lte: messageId
                    },
                    authorId: {
                        not: userId
                    },
                    chatId
                },
                data: {readed: true}
            })
            return true
        }
        return false
    }
    return false
}