import {PrismaClient} from "@prisma/client";
import {generateHashedPassword} from "../../utils/index.js";

interface Data {
    login: string,
    name: string,
    password: string
}

export const CREATE_USER = async (prisma: PrismaClient, data: Data) => {
    data.password = await generateHashedPassword(data.password)
    return await prisma.user.create({data})
}