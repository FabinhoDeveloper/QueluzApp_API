import CarroController from "../controllers/CarroController.js";

import { Router } from "express";
const router = Router()

router.post("/cadastrar-status", CarroController.cadastrarStatusCarro);
router.get("/listar-status", CarroController.listarStatusCarros);
router.post("/cadastrar-tipo", CarroController.cadastrarTipoCarro);
router.get("/listar-tipo", CarroController.listarTiposCarros);
router.get("/listar", CarroController.listarCarros);
router.post("/cadastrar", CarroController.cadastrarCarro);
router.delete("/excluir/:id_carro", CarroController.excluirCarro);
router.put("/editar/:id_carro", CarroController.alterarCarro);

export default router
