export const calculateCountUnreadMessages = (chatsWithUnreadMessages: Array<any>): Array<any> => {
    return chatsWithUnreadMessages.map(chat => {
        chat["unreadMessagesCount"] = chat.messages.length
        // @ts-ignore
        delete chat.messages
        return chat
    })
}