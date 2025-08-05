import OuvidoriaServices from "../services/OuvidoriaServices.js";

export default class OuvidoriaController {
    static async cadastrarCategoria(req, res) {
        const { nome } = req.body;

        try {
            const categoria = await OuvidoriaServices.cadastrarCategoria(nome);
            res.status(201).json({ mensagem: `Categoria ${nome} cadastrada com sucesso!`, categoria });
        } catch (error) {
            console.error(`Erro ao cadastrar categoria: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao cadastrar categoria: ${error.message}` });
        }
    }

    static async listarCategorias(req, res) {
        try {
            const categorias = await OuvidoriaServices.listarCategorias();
            res.status(200).json(categorias);
        } catch (error) {
            console.error(`Erro ao listar categorias: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao listar categorias: ${error.message}` });
        }
    }

    static async cadastrarStatusMensagem(req, res) {
        const { nome } = req.body;

        try {
            const status = await OuvidoriaServices.cadastrarStatusMensagem(nome);
            res.status(201).json({ mensagem: `Status ${nome} cadastrado com sucesso!`, status });
        } catch (error) {
            console.error(`Erro ao cadastrar status: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao cadastrar status: ${error.message}` });
        }
    }

    static async listarStatusMensagens(req, res) {
        try {
            const status = await OuvidoriaServices.listarStatusMensagens();
            res.status(200).json(status);
        } catch (error) {
            console.error(`Erro ao listar status: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao listar status: ${error.message}` });
        }
    }

    static async cadastrarMensagem(req, res) {
        const { idStatus, idUsuario, idCategoria, assunto, nome_solicitante, email_solicitante, mensagem } = req.body;

        try {
            const novaMensagem = await OuvidoriaServices.cadastrarMensagem(idStatus, idUsuario, idCategoria, assunto, nome_solicitante, email_solicitante, mensagem);
            res.status(201).json({ mensagem: `Mensagem cadastrada com sucesso!`, novaMensagem });
        } catch (error) {
            console.error(`Erro ao cadastrar mensagem: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao cadastrar mensagem: ${error.message}` });
        }
    }

    static async listarMensagens(req, res) {
        try {
            const mensagens = await OuvidoriaServices.listarMensagens();
            res.status(200).json(mensagens);
        } catch (error) {
            console.error(`Erro ao listar mensagens: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao listar mensagens: ${error.message}` });
        }
    }

    static async listarMensagensPorUsuario(req, res) {
        const { idUsuario } = req.params;

        try {
            const mensagens = await OuvidoriaServices.listarMensagensPorUsuario(idUsuario);
            res.status(200).json(mensagens);
        } catch (error) {
            console.error(`Erro ao listar mensagens por usuário: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao listar mensagens por usuário: ${error.message}` });
        }
    }

    static async alterarStatusMensagem(req, res) {
        const { idMensagem } = req.params;
        const { idStatus } = req.body;

        try {
            const mensagem = await OuvidoriaServices.alterarStatusMensagem(idMensagem, idStatus);
            res.status(200).json({ mensagem: `Status da mensagem alterado com sucesso!`, mensagem });
        } catch (error) {
            console.error(`Erro ao alterar status da mensagem: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao alterar status da mensagem: ${error.message}` });
        }
    }

    static async excluirMensagem(req, res) {
        const { idMensagem } = req.params;

        try {
            await OuvidoriaServices.excluirMensagem(idMensagem);
            res.status(204).json({ mensagem: `Mensagem excluída com sucesso!` });
        } catch (error) {
            console.error(`Erro ao excluir mensagem: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao excluir mensagem: ${error.message}` });
        }
    }
}