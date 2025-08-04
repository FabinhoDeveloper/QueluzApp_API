import UsuarioController from "../controllers/UsuarioController.js";

import { Router } from "express";
const router = Router()

router.get("/listar", UsuarioController.listarUsuarios)
router.post("/cadastrar", UsuarioController.cadastrarUsuario)

export default router