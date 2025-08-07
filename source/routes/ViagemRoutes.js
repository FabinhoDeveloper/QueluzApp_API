import ViagemController from "../controllers/ViagemController.js";

import { Router } from "express";
const router = Router()

router.post("/solicitar", ViagemController.solicitarViagem)
router.post("/cadastrar", ViagemController.cadastrarViagem)
router.put("/atualizar/:id", ViagemController.atualizarViagem)
router.get("/listar/:id", ViagemController.listarViagemPorId)
router.get("/listar", ViagemController.listarViagens)
router.get("/listar/usuario/:id", ViagemController.listarViagensPorUsuario)
router.delete("/excluir/:id", ViagemController.excluirViagem)

export default router