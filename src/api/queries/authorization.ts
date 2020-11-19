import {queryField, stringArg} from "@nexus/schema";
import {ApolloError, AuthenticationError} from "apollo-server";
import {AUTH_USER} from "../../prisma/actions";

export const authorization = queryField("authorization", {
        type: 'String',
        description: 'authorize user',
        args: {
            login: stringArg({required: true}),
            password: stringArg({required: true})
        },
        resolve: async (root, args, context): Promise<any> => {
            const {prisma} = context
            try {
                const result = await AUTH_USER(prisma, args)
                if (!result) return new AuthenticationError('Invalid login or password')
                return result
            } catch (e) {
                return new ApolloError(e)
            }
        }
    }
);