import prisma from "../config/prisma.js";

export default class FuncionarioServices {
    static async listarFuncoes() {
        const funcoes = await prisma.funcao.findMany()

        return funcoes
    }

    static async listarFuncionarios() {
        const funcionarios = await prisma.funcionario.findMany({
            include: {
                usuario: true
            }
        })

        return funcionarios
    }
    
    static async cadastrarFuncao(nome) {
        if (!nome) {
            const erro = new Error("O campo nome é obrigatório.")
            erro.status = 400
            throw erro
        }

        const funcaoExistente = await prisma.funcao.findFirst({
            where: {
                nome
            }
        })

        if (funcaoExistente) {
            const erro = new Error("A função já está cadastrada no sistema.")
            erro.status = 409
            throw erro
        }
    
        const funcao = await prisma.funcao.create({
            data: {
                nome
            }
        })

        return funcao
    }
    
    static async cadastrarFuncionario(id_usuario, matricula) {
        const usuarioExistente = await prisma.usuario.findUnique({
            where: {
                id_usuario
            }
        })

        if (!usuarioExistente) {
            const erro = new Error("Usuário não encontrado.")
            erro.status = 404
            throw erro
        }

        const funcionario = await prisma.funcionario.create({
            data: {
                usuario_id_usuario: id_usuario,
                matricula
            }
        })

        return funcionario
    }

    static async atribuirFuncao(id_funcionario, id_funcao) {
        const funcionario = await prisma.funcionario.findUnique({
            where: {
                id_funcionario
            }
        })

        if (!funcionario) {
            const erro = new Error("Funcionário não encontrado.")
            erro.status = 404
            throw erro
        }

        const funcao = await prisma.funcao.findUnique({
            where: {
                id_funcao
            }
        })

        if (!funcao) {
            const erro = new Error("Função não encontrada.")
            erro.status = 404
            throw erro
        }

        const funcionarioFuncaoExistente = await prisma.funcionario_funcao.findFirst({
            where: {
                funcionario_id_funcionario: id_funcionario,
                funcao_id_funcao: id_funcao
            }
        })

        if (funcionarioFuncaoExistente) {
            const erro = new Error("Função já atribuída ao funcionário.")
            erro.status = 409
            throw erro
        }

        const funcionarioFuncao = await prisma.funcionario_funcao.create({
            data: {
                funcionario_id_funcionario: id_funcionario,
                funcao_id_funcao: id_funcao
            }
        })

        return funcionarioFuncao
    }

    static async removerFuncao(id_funcionario, id_funcao) {}

    static async excluirFuncionario(id_funcionario) {}
}
