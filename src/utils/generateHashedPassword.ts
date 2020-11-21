import bcrypt from 'bcrypt'

export const generateHashedPassword = async (password: string): Promise<string> => {
    try {
        return await bcrypt.hash(password, 5)
    } catch (e) {
        throw new Error(e)
    }
}

