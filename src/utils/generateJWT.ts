import {sign} from 'jsonwebtoken'

export const generateJWT = (id: number): string => {
    return sign({userId: id}, process.env.JWT_SALT)
}
