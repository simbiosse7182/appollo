import {PrismaClient} from "@prisma/client";

export const FIND_USER_BY_ID = async (prisma: PrismaClient, id: number) => {
    return await prisma.user.findOne({where: {id}})
}