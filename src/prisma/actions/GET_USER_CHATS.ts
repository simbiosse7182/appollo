import {Context} from "../../config/context";
import {calculateCountUnreadMessages} from "../../utils";

export const GET_USER_CHATS = async (context: Context): Promise<any> => {
    const {prisma, userId} = context
    if (!userId) return []
    const user = await prisma.user.findOne({
        where: {id: userId},
        select: {
            chats: {
                orderBy: {
                    updatedAt: 'desc'
                },
                select: {
                    id: true,
                    users: {
                        select: {
                            login: true,
                            name: true,
                            id: true
                        },
                        where: {
                            id: {
                                not: userId
                            }
                        }
                    },
                    lastMessage: true,
                    messages: {
                        where: {
                            authorId: {not: userId},
                            readed: false,
                        },
                    }
                },
            }
        }
    })
    //prisma cant count messages yet.
    if (user?.chats) {
        const {chats} = user
        return calculateCountUnreadMessages(chats)
    }
    return []
}