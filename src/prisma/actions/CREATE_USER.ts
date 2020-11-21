import {PrismaClient } from "@prisma/client";
import {generateHashedPassword} from "../../utils";

interface Data {
    login: string,
    name: string,
    password: string
}

export const CREATE_USER = async (prisma: PrismaClient, data: Data) : Promise<any> => {
    data.password = await generateHashedPassword(data.password)
    return await prisma.user.create({data})
}