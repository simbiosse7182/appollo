import {mutationField, stringArg} from "@nexus/schema";
import {UserInputError} from 'apollo-server'
import {generateJWT} from "../../utils";
import {registrationValidationSchema} from "../../validation";
import {CREATE_USER} from "../../prisma/actions";

export const registration = mutationField("registration", {
    type: "String",
    nullable: true,
    description: 'register new user',
    args: {
        login: stringArg({required: true}),
        name: stringArg({required: true}),
        password: stringArg({required: true})
    },
    resolve: async (root, args, context): Promise<any> => {
        try {
            await registrationValidationSchema(args)
        } catch (e) {
            return new UserInputError(e.message, e.errors)
        }

        try {
            const {prisma} = context
            const user = await CREATE_USER(prisma, args)
            return generateJWT(user.id)
        } catch (e) {
            return new UserInputError('this login is already taken')
        }


    }
})