import bcrypt from 'bcrypt'

export const comparePasswords =  async (password:string, hash:string) : Promise<boolean> => {
    try {
        return await bcrypt.compare(password, hash)
    } catch (e){
        return false
    }
}
