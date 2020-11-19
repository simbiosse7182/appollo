import { PrismaClient } from '@prisma/client'
import  mocks from './mocks';
const prisma  = new PrismaClient();

const seedUsers = async () => {
    for (const user of mocks.users){
        const User = await prisma.user.create({data:{...user}})
        console.log(User)
    }
}

const findAllUsers = async () => {
    return  await prisma.user.findMany()
}

const deleteUsers = async (users) => {
    for (const user of users){
        await prisma.user.delete({
            where : {
               id: user.id
            }
        })
    }
    const count = await prisma.user.count()
    console.log(count)
}

const test = async () => {
    try {
        // await seedUsers()
        const users = await findAllUsers()
        // const chat = await prisma.chat.create({
        //     data:{
        //         users:{
        //             connect:[{id:53}, {id:52}]
        //         }
        //     }
        // })
       const chat = await prisma.chat.findOne({where:{id:5}}).users()
        console.log(chat)
        // await deleteUsers(users)

}catch (e){
    console.log(e)}
}

test();