import {objectType} from '@nexus/schema'

export const Message = objectType({
    name: "Message",
    definition(t) {
        t.int('id')
        t.string('text')
        t.int('authorId')
        t.int('chatId')
        t.field('author', {type: "User", nullable: true})
        t.field('chat', {type: "Chat", nullable: true})
    }
})