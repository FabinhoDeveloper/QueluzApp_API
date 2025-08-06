import UsuarioController from "../controllers/UsuarioController.js";

import { Router } from "express";
const router = Router()

router.get("/listar", UsuarioController.listarUsuarios)
router.post("/cadastrar", UsuarioController.cadastrarUsuario)
router.put("/editar/:idUsuario", UsuarioController.editarUsuario)
router.delete("/excluir/:idUsuario", UsuarioController.excluirUsuario)
router.put("/confirmar-telefone/:idUsuario", UsuarioController.confirmarTelefone)

export default router
