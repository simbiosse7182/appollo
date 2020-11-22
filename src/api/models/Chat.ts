import {objectType} from '@nexus/schema'

export const Chat = objectType({
    name: "Chat",
    definition(t) {
        t.int('id')
        t.int('lastMessageId')
        t.date('updatedAt')
        t.list.field('users', {
            type: "User",
            nullable: true
        })
        t.list.field('messages', {
            type: "Message",
            nullable: true
        })
        t.field('lastMessage', {
            type: "Message",
            nullable: true
        })
        t.int('unreadMessagesCount', {nullable: true})
    }
})