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
            try {
                // @ts-ignore
                return await GET_USER_CHATS(context)
            } catch (e) {
                return new ApolloError(e)
            }
        }
    }
);