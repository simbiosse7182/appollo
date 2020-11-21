import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export interface Context {
    prisma: PrismaClient
    token: string | null
    userId: number | null
}

const context = ({req}): Context => {
    const token = req.headers.authentication || null;
    return ({prisma: prisma, token, userId: null})
}

export default context