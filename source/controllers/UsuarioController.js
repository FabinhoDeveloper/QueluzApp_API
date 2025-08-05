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