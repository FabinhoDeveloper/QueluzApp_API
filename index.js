import express from 'express'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configuração das Rotas
import UsuarioRoutes from './source/routes/UsuarioRoutes.js'
import AuthRoutes from './source/routes/AuthRoutes.js'
import FuncionarioRoutes from './source/routes/FuncionarioRoutes.js'
import OuvidoriaRoutes from './source/routes/OuvidoriaRoutes.js'

import gerarNumeroProtocolo from './source/helpers/gerarNumeroProtocolo.js'

app.get("/", (req, res) => {
    res.json({ mensagem: `API do Queluz+ rodando na porta ${PORT}` })
})

app.use("/usuario", UsuarioRoutes)
app.use("/auth", AuthRoutes)
app.use("/funcionario", FuncionarioRoutes)
app.use("/ouvidoria", OuvidoriaRoutes)

console.log(`Número de Protocolo Gerado: ${gerarNumeroProtocolo()}`)

// Instância do Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
