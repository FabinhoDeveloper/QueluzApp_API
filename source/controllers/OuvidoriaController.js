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

    static async cadastrarMensagem(req, res) {
        const { idUsuario, idCategoria, assunto, nome_solicitante, email_solicitante, mensagem } = req.body;
        
        try {
            const novaMensagem = await OuvidoriaServices.cadastrarMensagem( idUsuario, idCategoria, assunto, nome_solicitante, email_solicitante, mensagem);
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
            const mensagens = await OuvidoriaServices.listarMensagensPorUsuario(Number(idUsuario));
            res.status(200).json(mensagens);
        } catch (error) {
            console.error(`Erro ao listar mensagens por usuário: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao listar mensagens por usuário: ${error.message}` });
        }
    }

    static async listarMensagemPorProtocolo(req, res) {
        const { numeroProtocolo } = req.params;

        try {
            const mensagem = await OuvidoriaServices.listarMensagemPorProtocolo(numeroProtocolo);
            
            res.status(200).json(mensagem);
        } catch (error) {
            console.error(`Erro ao listar mensagem por protocolo: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao listar mensagem por protocolo: ${error.message}` });
        }
    }

    static async alterarStatusMensagem(req, res) {
        const { idMensagem } = req.params;
        const { status } = req.body;

        try {
            const mensagem = await OuvidoriaServices.alterarStatusMensagem(Number(idMensagem), status);
            res.status(200).json({ mensagem: `Status da mensagem alterado com sucesso!`, mensagem });
        } catch (error) {
            console.error(`Erro ao alterar status da mensagem: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao alterar status da mensagem: ${error.message}` });
        }
    }

    static async excluirMensagem(req, res) {
        const { idMensagem } = req.params;

        try {
            await OuvidoriaServices.excluirMensagem(Number(idMensagem));
            return res.status(204).send()
        } catch (error) {
            console.error(`Erro ao excluir mensagem: ${error.message}`);
            return res.status(error.status || 500).json({ mensagem: `Erro ao excluir mensagem: ${error.message}` });
        }
    }
}
