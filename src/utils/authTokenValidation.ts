import {decodeJWT} from "./decodeJWT";
import {FIND_USER_BY_ID} from "../prisma/actions";
import {Context} from "../config/context";

export const authTokenValidation = async (context: Context): Promise<boolean> => {
    try {
        const {prisma, token} = context
        const payload = decodeJWT(token)
        const userId = payload?.userId

        if (!userId) return false

        const user = await FIND_USER_BY_ID(prisma, userId)
        if (user) {
            context.userId = userId
            return true
        }
        return false
    } catch (e) {
        console.log(e)
        return false
    }
}
