"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const prisma_1 = require("../../lib/prisma");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/findAll', async (request, response) => {
    const user = await prisma_1.prisma.user.findMany();
    return response.send({ user });
});
// userRouter.get('/user/:id', async (request, response) => {
//     const { id } = request.params
//const user = await prisma.user.findUnique({
//  where: { id: parseInt(id, 10) }
//})
//     if (!user) {
//         return response.status(404).send({ message: 'User not found' })
//     }
//     return response.send({ user })
// })
exports.userRouter.post('/user', async (request, response) => {
    const { nome, email, Senha, tipo_usuario } = request.body;
    const user = await prisma_1.prisma.user.create({
        data: {
            nome,
            email,
            Senha,
            tipo_usuario,
        }
    });
    return response.status(201).send({ user });
});
exports.userRouter.delete('/user/:id', async (request, response) => {
    const { id } = request.params;
    return response.send();
});
