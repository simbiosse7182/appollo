import {queryField} from "@nexus/schema";
import {ForbiddenError, ApolloError} from 'apollo-server'
import {FIND_USER_BY_ID} from "../../prisma/actions";

export const me = queryField("me", {
        type: 'User',
        description: 'get account info',
        resolve: async (root, args, context): Promise<any> => {
            const {userId, prisma} = context

            if (!userId) return new ForbiddenError('Not logged')

            try {
                return await FIND_USER_BY_ID(prisma, userId)
            } catch (e) {
                console.log(e)
                return new ApolloError(e)
            }
        }
    }
);