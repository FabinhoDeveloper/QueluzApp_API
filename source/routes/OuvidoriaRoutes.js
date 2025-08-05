import OuvidoriaController from "../controllers/OuvidoriaController.js";

import { Router } from "express";
const router = Router()

router.post("/cadastrar-categoria", OuvidoriaController.cadastrarCategoria);
router.get("/listar-categorias", OuvidoriaController.listarCategorias);
router.post("/cadastrar-status", OuvidoriaController.cadastrarStatusMensagem);
router.get("/listar-status", OuvidoriaController.listarStatusMensagens);
router.post("/cadastrar-mensagem", OuvidoriaController.cadastrarMensagem);
router.get("/listar-mensagens", OuvidoriaController.listarMensagens);
router.get("/listar-mensagens-por-usuario/:idUsuario", OuvidoriaController.listarMensagensPorUsuario);
router.put("/alterar-status/:idMensagem", OuvidoriaController.alterarStatusMensagem);
router.delete("/excluir/:idMensagem", OuvidoriaController.excluirMensagem);

export default router
