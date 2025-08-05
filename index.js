import express from 'express'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configuração das Rotas
import AuthRoutes from './source/routes/AuthRoutes.js'
import indexRoutes from './source/routes/index.js'

import verificacaoToken from './source/middlewares/verificacaoToken.js'

app.use('/auth', AuthRoutes)
app.use('/', /*verificacaoToken,*/ indexRoutes) // Middleware de verificação de token aplicado globalmente

// Instância do Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
