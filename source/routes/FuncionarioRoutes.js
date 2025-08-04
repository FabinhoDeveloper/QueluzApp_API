import FuncionarioController from "../controllers/FuncionarioController.js";

import { Router } from "express";
const router = Router()

router.get("/listar", FuncionarioController.listarFuncionarios)
router.get("/listar-funcoes", FuncionarioController.listarFuncoes)
router.post("/cadastrar", FuncionarioController.cadastrarFuncionario)
router.post("/cadastrar-funcao", FuncionarioController.cadastrarFuncao)

export default router
