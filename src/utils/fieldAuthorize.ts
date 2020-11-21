import {authTokenValidation} from "./authTokenValidation";

export const fieldAuthorize = async (root, args, context): Promise<boolean> => await authTokenValidation(context)