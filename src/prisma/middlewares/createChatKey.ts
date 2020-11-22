import {generateChatKey} from "../../utils";

export const createChatKey = async (params, next) => {
    if(params.model === "Chat" && params.action === "findMany"){
        console.log('YESSS')
    }
    if (params.model === "Chat" && params.action === "create") {
        const {data} = params.args
        const {connect: users} = data.users
        const ids = users.map(user => user.id)
        params.args.data.key = generateChatKey(ids)
    }
    return await next(params)
}