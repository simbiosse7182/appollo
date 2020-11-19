import {mutationField, stringArg} from "@nexus/schema";
import {messageTextValidationSchema} from "../../validation";
import {ForbiddenError, UserInputError} from "apollo-server";
import {SEND_MESSAGE} from "../../prisma/actions";

export const sendMessage = mutationField("sendMessage", {
    type: "Message",
    nullable: true,
    description: 'send new message',
    args: {
        to: stringArg({required: true}),
        text: stringArg({required: true}),
    },
    resolve: async (root, args, context): Promise<any> => {
        const {prisma, userId} = context
        if (!userId) return new ForbiddenError('Not logged')

        args.text = args.text.replace(/\s+/g, ' ').trim()

        const {text, to} = args

        try {
            await messageTextValidationSchema({text})
        } catch (e) {
            return new UserInputError(e.message, e.errors)
        }

        try {
            const result = await SEND_MESSAGE(prisma, {from: userId, to, text})
            console.log(result)
            return result
        } catch (e) {
            return new UserInputError(e)
        }
    }
})