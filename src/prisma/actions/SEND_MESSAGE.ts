import {PrismaClient} from "@prisma/client";
import {generateChatKey} from "../../utils";
import {FIND_USER_BY_LOGIN} from "./FIND_USER_BY_LOGIN";

interface Data {
    from: number
    to: string
    text: string
}

export const SEND_MESSAGE = async (prisma: PrismaClient, data: Data): Promise<any> => {
    const {from, to, text} = data
    const user = await FIND_USER_BY_LOGIN(prisma, to)
    if (!user) throw new Error('User not found')
    const connectedUsers = [
        {id: from},
        {id: user.id}
    ]
    const key = generateChatKey([from, user.id])
    return await prisma.message.create({
        data: {
            text: text,
            author: {
                connect: {
                    id: from
                }
            },
            chat: {
                connectOrCreate: {
                    where: {
                        key: key
                    },
                    create: {
                        users: {
                            connect: connectedUsers
                        },
                        key: key
                    }
                }
            }
        }
    })
}