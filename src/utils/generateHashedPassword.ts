import bcrypt from 'bcrypt'

const generateHashedPassword = async (password: string) : Promise<string> => {
  try {
    return await bcrypt.hash(password, 5)
  } catch (e) {
    throw new Error(e)
  }
}

export default generateHashedPassword