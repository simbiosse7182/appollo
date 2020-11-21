import {PrismaClient} from "@prisma/client";

export const GET_USER_CHATS = async (prisma: PrismaClient, id: number): Promise<any> => {
    const userWithChats = await prisma.user.findOne({
        where: {id},
        select: {
            chats: {
                orderBy: {
                    id: 'desc'
                },
                select: {
                    users: {
                        select: {
                            login: true,
                            name: true,
                            id: true
                        },
                        where: {
                            id: {
                                not: id
                            }
                        }
                    },
                    id: true,
                    messages: {
                        orderBy: {
                            id: 'desc'
                        },
                        take: 1,
                        select: {
                            text: true,
                            authorId: true
                        }
                    }
                },
            }
        }
    })
    return userWithChats?.chats || []
}