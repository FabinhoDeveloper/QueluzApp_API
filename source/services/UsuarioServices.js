import { PrismaClient } from "../../generated/prisma/index.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

export default class UsuarioServices {
    static async cadastrarUsuario(primeiroNome, ultimoNome, cpf, telefone, email, senha, endereco) {
        if (!primeiroNome || !ultimoNome || !cpf || !telefone || !email || !senha || !endereco) {
            const error = new Error("Todos os campos são obrigatórios.")
            error.status = 400
            throw error
        }

        const usuarioExistente = await prisma.usuario.findFirst({
            where: {
            OR: [
                { cpf },
                { email }
            ]
            }
        });

        const saltRounds = 10;
        const senhaHash = await bcrypt.hash(senha, saltRounds);

        if (usuarioExistente) {
            if (usuarioExistente.cpf === cpf) {
                const error = new Error("CPF já cadastrado.")
                error.status = 409
                throw error
            }

            if (usuarioExistente.email === email) {
                const error = new Error("Email já cadastrado.")
                error.status = 409
                throw error
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
                    senha: senhaHash,
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
