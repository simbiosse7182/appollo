import { objectType } from '@nexus/schema'

export const Message = objectType({
    name : "Message",
    definition(t) {
        t.model.id()
        t.model.text()
        t.model.author()
        t.model.authorId()
        t.model.chat()
        t.model.chatId()
    }
})