

export const readTime = (body) => {
    let length = body.length 
    return Math.floor(length/200) + 1 
}