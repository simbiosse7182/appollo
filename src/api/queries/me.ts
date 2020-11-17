import {queryField} from "@nexus/schema";
import {AuthenticationError, ApolloError} from 'apollo-server'

export const me = queryField("me", {
        type: 'User',
        nullable: true,
        resolve: async (root, args, context): Promise<any> => {
            if (!context.userId) return new AuthenticationError('Not logged')
            try {
                return await context.db.user.findOne({where: {id: context.userId}})
            } catch (e) {
                console.log(e)
                return new ApolloError(e)
            }
        }
    }
);