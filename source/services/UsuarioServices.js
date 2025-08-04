import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";

export default class UsuarioServices {
    static async listarUsuarios() {
        const usuarios = await prisma.usuario.findMany()

        return usuarios
    }

    static async cadastrarUsuario(primeiro_nome, ultimo_nome, cpf, telefone, email, senha, endereco) {
        if (!primeiro_nome || !ultimo_nome || !cpf || !telefone || !email || !senha || !endereco) {
            const error = new Error("Todos os campos são obrigatórios.")
            error.status = 400
            throw error
        }

        const usuarioExistente = await prisma.usuario.findFirst({
            where: {
            OR: [
                { cpf },
                { email },
                { telefone }
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
                    primeiro_nome,
                    ultimo_nome,
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
