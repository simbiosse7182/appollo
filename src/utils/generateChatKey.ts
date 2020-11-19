const generateChatKey=(ids:number[])=>{
    return ids.sort().join('~')
}

export default generateChatKey