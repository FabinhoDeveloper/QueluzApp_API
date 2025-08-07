import UsuarioRoutes from './UsuarioRoutes.js'
import FuncionarioRoutes from './FuncionarioRoutes.js'
import OuvidoriaRoutes from './OuvidoriaRoutes.js'
import CarroRoutes from './CarroRoutes.js'
import ViagemRouter from './ViagemRoutes.js'

import { Router } from 'express';

const router = Router()

router.use("/usuario", UsuarioRoutes)
router.use("/funcionario", FuncionarioRoutes)
router.use("/ouvidoria", OuvidoriaRoutes)
router.use("/carro", CarroRoutes)
router.use("/viagem", ViagemRouter)

export default router
