import FuncionarioServices from "../services/FuncionarioServices.js";

export default class FuncionarioController {
    static async listarFuncoes(req, res) {
        try {
            const funcoes = await FuncionarioServices.listarFuncoes()

            res.status(200).json({ funcoes })
        } catch (error) {
            console.error(`Erro ao listar funções: ${error.message}`)
            return res.status(error.status || 500).json({ mensagem: `Erro ao listar funções: ${error.message}` })
        }
    }

    static async listarFuncionarios(req, res) {
        try {
            const funcionarios = await FuncionarioServices.listarFuncionarios()

            res.status(200).json({ funcionarios })
        } catch (error) {
            console.error(`Erro ao listar funcionários: ${error.message}`)
            return res.status(error.status || 500).json({ mensagem: `Erro ao listar funcionários: ${error.message}` })
        }
    }

    static async cadastrarFuncao(req, res) {
        const {nome} = req.body

        try {
            const funcao = await FuncionarioServices.cadastrarFuncao(nome)

            res.status(201).json({ mensagem: 'Função cadastrada com sucesso!', funcao})
        } catch (error) {
            console.error(`Erro ao cadastrar função: ${error.message}`)
            return res.status(error.status || 500).json({ mensagem: `Erro ao cadastrar função: ${error.message}` })
        }
    }

    static async cadastrarFuncionario(req, res) {
        const { id_usuario, matricula } = req.body

        try {
            const funcionario = await FuncionarioServices.cadastrarFuncionario(id_usuario, matricula)
            res.status(201).json({ mensagem: 'Funcionário cadastrado com sucesso!', funcionario })
        } catch (error) {
            console.error(`Erro ao cadastrar funcionário: ${error.message}`)
            return res.status(error.status || 500).json({ mensagem: `Erro ao cadastrar funcionário: ${error.message}` })
        }
    }

    static async atribuirFuncao(req, res) {
        const { id_funcionario, id_funcao } = req.body

    }
}