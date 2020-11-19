import { objectType } from '@nexus/schema'

export const User = objectType({
    name : "User",
    definition(t) {
        t.model.id()
        t.model.login()
        t.model.name()
        t.model.chats()
    }
})