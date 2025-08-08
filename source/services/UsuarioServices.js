import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";

import validarCpf from "../helpers/validarCpf.js";

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

        if (!validarCpf(cpf)) {
            const error = new Error("CPF inválido.")
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

    static async editarUsuario(idUsuario, primeiroNome, ultimoNome, cpf, telefone, email, senha, endereco) {
        const usuarioExistente = await prisma.usuario.findUnique({
            where: {
                id_usuario: idUsuario
            }
        });

        if (!usuarioExistente) {
            const error = new Error("Usuário não encontrado.");
            error.status = 404;
            throw error;
        }

        if (cpf) {
            if (!validarCpf(cpf)) {
                const error = new Error("CPF inválido.")
                error.status = 400
                throw error
            }
        }

        const saltRounds = 10;
        const senhaHash = await bcrypt.hash(senha, saltRounds);

        const usuarioAtualizado = await prisma.usuario.update({
            where: {
                id_usuario: idUsuario
            },
            data: {
                primeiro_nome: primeiroNome,  
                ultimo_nome: ultimoNome,
                cpf,
                telefone,
                email,
                senha: senhaHash,
                endereco
            }
        });

        return usuarioAtualizado;
    }

    static async excluirUsuario(idUsuario) {
        const usuarioExistente = await prisma.usuario.findUnique({
            where: {
                id_usuario: idUsuario
            }
        });

        if (!usuarioExistente) {
            const error = new Error("Usuário não encontrado.");
            error.status = 404;
            throw error;
        }

        const usuarioDeletado = await prisma.usuario.delete({
            where: {
                id_usuario: idUsuario
            }
        });

        return usuarioDeletado
    }

    static async confirmarTelefone(idUsuario) {
        const usuario = await prisma.usuario.findUnique({
            where: {
                id_usuario: idUsuario
            }
        });

        if (!usuario) {
            const error = new Error("Usuário não encontrado.");
            error.status = 404;
            throw error;
        }

        if (usuario.telefone_confirmado) {
            const error = new Error("Telefone já confirmado.");
            error.status = 400;
            throw error;
        }

        const usuarioAtualizado = await prisma.usuario.update({
            where: {
                id_usuario: idUsuario
            },
            data: {
                telefone_confirmado: true
            }
        });

        return usuarioAtualizado;
    }
}
