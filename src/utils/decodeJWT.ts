import {verify} from 'jsonwebtoken'

interface Payload {
    userId: number
}

export const decodeJWT = (jwt: string | null): Payload | null => {
    if (!jwt) return null
    try {
        return verify(jwt, process.env.JWT_SALT)
    } catch (e) {
        return null
    }
}
