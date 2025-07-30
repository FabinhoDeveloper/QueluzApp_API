import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient()

export default class UsuarioServices {
    static async cadastrarUsuario(primeiroNome, ultimoNome, cpf, telefone, email, senha, endereco) {
        if (!primeiroNome || !ultimoNome || !cpf || !telefone || !email || !senha || !endereco) {
            throw new Error("Todos os dados são obrigatórios.")
        }

        const usuarioExistente = await prisma.usuario.findFirst({
            where: {
                OR: [
                    { cpf },
                    { email }
                ]
            }
        })

        if (usuarioExistente) {
            if (usuarioExistente.cpf === cpf) {
                throw new Error("CPF já cadastrado.")
            }

            if (usuarioExistente.email === email) {
                throw new Error("Email já cadastrado.")
            }
        }

        try {
            const usuario = await prisma.usuario.create({
                data: {
                    primeiroNome,
                    ultimoNome,
                    cpf,
                    telefone,
                    email,
                    senha,
                    endereco
                }
            })

            return usuario
        } catch (error) {
            throw new Error(`Erro na service ao cadastrar usuário: ${error.message}`)
        }
    }

    static async editarUsuario(primeiroNome, ultimoNome, cpf, telefone, email, endereco) {

    }

    static async excluirUsuario() {
       
    }
}
