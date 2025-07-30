import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient()

export default class AuthServices {
    static async login(email, senha) {
        try {
            const usuario = await prisma.usuario.findUnique({
                where: {
                    email
                }
            })

            if (!usuario) {
                throw new Error("Usuário não encontrado.")
            }

            if (usuario.senha === senha) {
                return usuario
            } else {
                throw new Error("Senha inválida.")
            }
        } catch (error) {
            throw new Error(`Erro na realizar a autenticação: ${error.message}`)
        }
    }
}
