import UsuarioServices from "../services/UsuarioServices.js";

export default class UsuarioController {
    static async listarUsuarios(req, res) {
        try {
            const resposta = await UsuarioServices.listarUsuarios()

            res.json(resposta)
        } catch (error) {
            console.error(`Erro ao cadastrar usuário: ${error.message}`)
            return res.status(error.status || 500).json({ mensagem: `Erro ao listar usuários: ${error.message}` })
        }
    }

    static async listarUsuarioPorCPF(req, res) {
        const { cpf } = req.params;

        try {
            const usuario = await UsuarioServices.listarUsuarioPorCPF(cpf);
            res.status(200).json(usuario);
        } catch (error) {
            console.error(`Erro ao listar usuário por CPF: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao listar usuário por CPF: ${error.message}` });
        }
    }

    static async cadastrarUsuario(req, res) {
        const {primeiro_nome, ultimo_nome, cpf, telefone, email, senha, endereco} = req.body

        try {
            const usuario = await UsuarioServices.cadastrarUsuario(primeiro_nome, ultimo_nome, cpf, telefone, email, senha, endereco)
            
            res.status(201).json({ mensagem: `Usuário ${primeiro_nome} ${ultimo_nome} cadastrado com sucesso!`})
        } catch (error) {
            console.error(`Erro ao cadastrar usuário: ${error.message}`)
            return res.status(error.status || 500).json({ mensagem: `Erro ao cadastrar usuário: ${error.message}` })
        }
    }

    static async editarUsuario(req, res) {
        const { idUsuario } = req.params;
        const { primeiro_nome, ultimo_nome, cpf, telefone, email, senha, endereco } = req.body;

        try {
            const usuario = await UsuarioServices.editarUsuario(Number(idUsuario), primeiro_nome, ultimo_nome, cpf, telefone, email, senha, endereco);
            res.status(200).json({ mensagem: `Usuário ${usuario.primeiro_nome} ${usuario.ultimo_nome} atualizado com sucesso!`, usuario });
        } catch (error) {
            console.error(`Erro ao editar usuário: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao editar usuário: ${error.message}` });
        }
    }

    static async excluirUsuario(req, res) {
        const { idUsuario } = req.params;

        try {
            await UsuarioServices.excluirUsuario(Number(idUsuario));
            res.status(200).json({ mensagem: `Usuário excluído com sucesso!` });
        } catch (error) {
            console.error(`Erro ao excluir usuário: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao excluir usuário: ${error.message}` });
        }
    }

    static async confirmarTelefone(req, res) {
        const { idUsuario } = req.params;

        try {
            const usuario = await UsuarioServices.confirmarTelefone(Number(idUsuario));
            res.status(200).json({ mensagem: `Telefone do usuário ${usuario.primeiro_nome} confirmado com sucesso!`, usuario });
        } catch (error) {
            console.error(`Erro ao confirmar telefone: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao confirmar telefone: ${error.message}` });
        }
    }
}
