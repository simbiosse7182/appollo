import { objectType } from '@nexus/schema'

export const Chat = objectType({
    name : "Chat",
    definition(t) {
        t.model.id()
        t.model.users()
        t.model.messages()
    }
})