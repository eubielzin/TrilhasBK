import { Router} from 'express'
import { prisma } from '../../lib/prisma'

export const userRouter= Router()

userRouter.get('/user', async (request , response) => {
    const user = await prisma.user.findMany()

    return response.send({ user })
})

userRouter.post('/user', async(request, response) => {
    const { nome, email, Senha, tipo_usuario } = request.body

    const user = await prisma.user.create({
        data:{
            nome,
            email,
            Senha,
            tipo_usuario,
        }
    })
    return response.status(201).send({user})
})

userRouter.delete('/user/:id', async (request, response) =>{
    const { id } = request.params

    return response.send()
})
