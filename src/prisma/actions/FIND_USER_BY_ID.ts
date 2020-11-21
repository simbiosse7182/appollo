import {PrismaClient} from "@prisma/client";

export const FIND_USER_BY_ID = async (prisma: PrismaClient, id: number): Promise<any> => {
    return await prisma.user.findOne({where: {id}})
}