import UsuarioController from "../controllers/UsuarioController.js";

import { Router } from "express";
const router = Router()

router.post("/cadastrar", UsuarioController.cadastrarUsuario)

export default router