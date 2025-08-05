import prisma from "../config/prisma.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const SECRET = process.env.SECRET

export default class AuthServices {
    static async login(email, senha) {
        try {
            const usuario = await prisma.usuario.findUnique({
                where: {
                    email
                }
            })

            if (!usuario) {
                const error = new Error("Usuário não encontrado.")
                error.status = 404
                throw error
            }

            const senhaValida = await bcrypt.compare(senha, usuario.senha)
            
            const token = jwt.sign({ id: usuario.id, email: usuario.email }, SECRET, {
                expiresIn: '7d'
            })

            if (senhaValida) {
                return { usuario, token }
            } else {
                const error = new Error("Senha inválida.")
                error.status = 401
                throw error
            }
        } catch (error) {
            if (error.status) {
                throw error
            }

            throw new Error(`Erro na realizar a autenticação: ${error.message}`)
        }
    }
}
