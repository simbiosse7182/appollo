import { objectType } from '@nexus/schema'

export const User = objectType({
    name : "User",
    definition(t) {
        t.int('id')
        t.string('login')
        t.string('name')
    }
})