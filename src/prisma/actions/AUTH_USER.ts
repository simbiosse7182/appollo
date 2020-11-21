import {PrismaClient} from "@prisma/client";
import {comparePasswords, generateJWT} from "../../utils";

type Data = {
    login: string,
    password: string
}

export const AUTH_USER = async (prisma: PrismaClient, data: Data): Promise< string | false> => {
    const {login, password} = data
    const user = await prisma.user.findOne({where: {login}})
    if (!user) return false

    const compared = await comparePasswords(password, user.password)

    if (!compared) return false

    return generateJWT(user.id)
}