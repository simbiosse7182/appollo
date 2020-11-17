import { PrismaClient } from '@prisma/client'
import {verifyJWT} from "../utils/index.js";

export interface Context {
    db: PrismaClient
    userId: number | null
}

const context = ({req}) : Context=> {
    const token = req.headers.authentication || '';
    const userId = verifyJWT(token)?.userId || null
    return ({db: new PrismaClient(), userId})
}

export default context