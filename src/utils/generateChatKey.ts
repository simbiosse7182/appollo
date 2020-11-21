export const generateChatKey = (ids: number[]) => {
    return ids.sort().join('~')
}
