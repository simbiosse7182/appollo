import {queryField} from "@nexus/schema";
import {ApolloError} from 'apollo-server'
import {FIND_USER_BY_ID} from "../../prisma/actions";
import {authorize} from "../../utils";

export const me = queryField("me", {
        type: 'User',
        description: 'get account info',
        authorize,
        resolve: async (root, args, context): Promise<any> => {
            const {userId, prisma} = context

            try {
                // @ts-ignore
                return await FIND_USER_BY_ID(prisma, userId)
            } catch (e) {
                console.log(e)
                return new ApolloError(e)
            }
        }
    }
);