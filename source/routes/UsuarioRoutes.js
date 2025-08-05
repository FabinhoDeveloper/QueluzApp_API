import UsuarioController from "../controllers/UsuarioController.js";

import { Router } from "express";
const router = Router()

router.get("/listar", UsuarioController.listarUsuarios)
router.post("/cadastrar", UsuarioController.cadastrarUsuario)
router.put("/confirmar-telefone/:idUsuario", UsuarioController.confirmarTelefone)

export default router