import prisma from "../config/prisma.js";
import gerarNumeroProtocolo from "../helpers/gerarNumeroProtocolo.js";

export default class OuvidoriaServices {
    static async cadastrarCategoria(nome) {
        const categoriaExistente = await prisma.categoria_mensagem.findFirst({
            where: {
                nome
            }
        });

        if (categoriaExistente) {
            const erro = new Error("Categoria já cadastrada.");
            erro.status = 400;
            throw erro;
        }

        const categoria = await prisma.categoria_mensagem.create({
            data: {
                nome
            }
        })
        return categoria
    }

    static async listarCategorias() {
        const categorias = await prisma.categoria_mensagem.findMany()
        return categorias
    }

    static async cadastrarStatusMensagem(nome) {
        const statusExistente = await prisma.status_mensagem.findFirst({
            where: {
                nome
            }
        });

        if (statusExistente) {
            const erro = new Error("Status já cadastrado.");
            erro.status = 400;
            throw erro;
        }

        const status = await prisma.status_mensagem.create({
            data: {
                nome
            }
        })
        return status
    }

    static async listarStatusMensagens() {
        const status = await prisma.status_mensagem.findMany()
        return status
    }

    static async cadastrarMensagem(idStatus, idUsuario, idCategoria, assunto, nome_solicitante, email_solicitante, mensagem) {        
        const novaMensagem = await prisma.mensagem_ouvidoria.create({
            data: {
                status_mensagem_id_status_mensagem: idStatus,
                usuario_id_usuario: idUsuario,
                categoria_mensagem_id_categoria_mensagem: idCategoria,
                assunto,
                nome_solicitante,
                email_solicitante,
                numero_protocolo: gerarNumeroProtocolo(),
                mensagem
            }
        })

        return novaMensagem
    }

    static async listarMensagens() {
        const mensagens = await prisma.mensagem.findMany()
        return mensagens
    }

    static async listarMensagensPorUsuario(idUsuario) {
        const mensagens = await prisma.mensagem.findMany({
            where: {
                usuario_id_usuario: idUsuario
            }
        })
        return mensagens
    }

    static async listarMensagemPorProtocolo(numeroProtocolo) {
        const mensagem = await prisma.mensagem.findFirst({
            where: {
                numero_protocolo: numeroProtocolo
            }
        })

        if (!mensagem) {
            const erro = new Error("Mensagem não encontrada.");
            erro.status = 404;
            throw erro;
        }

        return mensagem
    }

    static async alterarStatusMensagem(idMensagem, idStatus) {
        const mensagem = await prisma.mensagem.update({
            where: {
                id_mensagem_ouvidoria: idMensagem
            },
            data: {
                status_mensagem_id_status_mensagem: idStatus
            }
        })
        return mensagem
    }

    static async excluirMensagem(idMensagem) {
        const mensagem = await prisma.mensagem.findUnique({
            where: {
                id_mensagem_ouvidoria: idMensagem
            }
        })

        if (!mensagem) {
            const erro = new Error("Mensagem não encontrada.")
            erro.status = 404
            throw erro
        }

        await prisma.mensagem.delete({
            where: {
                id_mensagem_ouvidoria: idMensagem
            }
        })
    }
}
