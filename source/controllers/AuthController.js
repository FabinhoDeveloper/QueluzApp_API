import AuthServices from "../services/AuthServices.js";

export default class AuthController {
    static async login(req, res) {
        const { email, senha } = req.body

        try {
            const resposta = await AuthServices.login(email, senha)

            res.status(200).json({ mensagem: `Usuário autenticado com sucesso!`, resposta })
        } catch (error) {
            console.error(`Erro ao realizar login: ${error.message}`)
            return res.status(error.status || 500).json({ mensagem: `Erro ao realizar login: ${error.message}` })
        }
    }
}
