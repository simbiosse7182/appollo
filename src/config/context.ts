import {PrismaClient} from '@prisma/client'
import {verifyJWT} from "../utils/index.js";

const prisma = new PrismaClient()

export interface Context {
    prisma: PrismaClient
    userId: number | null
}

const context = async ({req}): Promise<Context> => {
    const token = req.headers.authentication || '';
    let userId = verifyJWT(token)?.userId || null
    if(userId){
        const user = await prisma.user.findOne({where:{id:userId}})
        if(!user){
            userId = null
        }
    }

    return ({prisma: prisma, userId})
}

export default context