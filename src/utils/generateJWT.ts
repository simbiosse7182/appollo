import { sign }  from 'jsonwebtoken'

const generateJWT = (id:number):string => {
    return sign({userId:id}, process.env.JWT_SALT)
}

export default generateJWT