import {PrismaClient} from "@prisma/client";

export const FIND_USER_BY_LOGIN = async (prisma: PrismaClient, login: string) => {
    return await prisma.user.findOne({where: {login}})
}