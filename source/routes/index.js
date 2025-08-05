import UsuarioRoutes from './UsuarioRoutes.js'
import FuncionarioRoutes from './FuncionarioRoutes.js'
import OuvidoriaRoutes from './OuvidoriaRoutes.js'
import CarroRoutes from './CarroRoutes.js'
import { Router } from 'express';

const router = Router()

router.use("/usuario", UsuarioRoutes)
router.use("/funcionario", FuncionarioRoutes)
router.use("/ouvidoria", OuvidoriaRoutes)
router.use("/carro", CarroRoutes)

export default router
