import UsuarioServices from "../services/UsuarioServices.js";

export default class UsuarioController {
    static async cadastrarUsuario(req, res) {
        const {primeiroNome, ultimoNome, cpf, telefone, email, senha, endereco} = req.body

        try {
            const usuario = await UsuarioServices.cadastrarUsuario(primeiroNome, ultimoNome, cpf, telefone, email, senha, endereco)
            
            res.status(201).json({ mensagem: `Usuário ${primeiroNome} ${ultimoNome} cadastrado com sucesso!`})
        } catch (error) {
            console.error(`Erro ao cadastrar usuário: ${error.message}`)
            return res.status(500).json({ mensagem: `Erro ao cadastrar usuário: ${error.message}` })
        }
    }
}