import express from 'express'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configuração das Rotas
import AuthRoutes from './source/routes/AuthRoutes.js'
import UsuarioRoutes from './source/routes/UsuarioRoutes.js'
import FuncionarioRoutes from './source/routes/FuncionarioRoutes.js'
import OuvidoriaRoutes from './source/routes/OuvidoriaRoutes.js'
import CarroRoutes from './source/routes/CarroRoutes.js'
import ViagemRouter from './source/routes/ViagemRoutes.js'

import verificacaoToken from './source/middlewares/verificacaoToken.js'

app.use('/auth', AuthRoutes)
app.use("/usuario", UsuarioRoutes)
app.use("/funcionario", verificacaoToken, FuncionarioRoutes)
app.use("/ouvidoria", verificacaoToken, OuvidoriaRoutes)
app.use("/carro", verificacaoToken, CarroRoutes)
app.use("/viagem", verificacaoToken, ViagemRouter)

// Instância do Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
