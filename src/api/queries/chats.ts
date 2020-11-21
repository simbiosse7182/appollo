import {queryField} from "@nexus/schema";
import {GET_USER_CHATS} from "../../prisma/actions";
import {ApolloError} from "apollo-server";
import {authorize} from "../../utils";

export const chats = queryField("chats", {
        type: 'Chat',
        description: 'get user chats',
        nullable: true,
        list: true,
        authorize,
        resolve: async (root, args, context): Promise<any> => {
            const {prisma, userId} = context
            try {
                // @ts-ignore
                const result = await GET_USER_CHATS(prisma, userId)
                console.log(result)
                return result
            } catch (e) {
                return new ApolloError(e)
            }
        }
    }
);