import {verify} from 'jsonwebtoken'

interface Payload {
    userId : number
}

const verifyJWT = (jwt:string) : Payload | null=> {
    try {
        return verify(jwt,process.env.JWT_SALT)
    }catch (e){
        return  null
    }
}

export default verifyJWT