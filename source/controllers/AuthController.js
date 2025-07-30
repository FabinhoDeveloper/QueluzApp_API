import AuthServices from "../services/AuthServices.js";

export default class AuthController {
    static async login(req, res) {
        const { email, senha } = req.body

        try {
            const usuario = await AuthServices.login(email, senha)

            res.status(201).json({ mensagem: `Usuário ${usuario.primeiroNome} ${usuario.ultimoNome} autenticado com sucesso!`})
        } catch (error) {
            console.error(`Erro ao realizar login usuário: ${error.message}`)
            return res.status(500).json({ mensagem: `Erro ao realizar login: ${error.message}` })
        }
    }
}
