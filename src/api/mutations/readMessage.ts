import {mutationField, intArg} from "@nexus/schema";
import {READ_MESSAGE} from "../../prisma/actions";
import {authorize} from "../../utils";
import {ForbiddenError} from "apollo-server";

export const readMessage = mutationField("readMessage", {
    type: "Boolean",
    nullable: true,
    description: 'read message',
    args: {
        messageId: intArg({required: true})
    },
    authorize,
    resolve: async (root, args, context): Promise<any> => {
        const {prisma, userId} = context
        const {messageId} = args

        try {
            // @ts-ignore
            return  await READ_MESSAGE(prisma, {messageId, userId})
        } catch (e) {
            return new ForbiddenError(e)
        }
    }
})