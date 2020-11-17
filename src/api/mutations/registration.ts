import {mutationField, stringArg} from "@nexus/schema";
import {UserInputError} from 'apollo-server'
import {generateJWT} from "../../utils/index.js";
import {registrationValidationSchema} from "../../validation";

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
        }catch (e) {
            return new UserInputError(e.message, e.errors)
        }

        const user = await context.db.user.findOne({
            where : {login:args.login}
        })
        if(user) return new UserInputError('this login is already taken')

        const newUser = await context.db.user.create({
            data: {
                login: args.login,
                name: args.name,
                password: args.password
            }
        })

        return generateJWT(newUser.id)
    }
})