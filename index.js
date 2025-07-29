import express from 'express'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT
const app = express()

app.get("/", (req, res) => {
    res.json({ mensagem: `API do Queluz+ rodando na porta ${PORT}` })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
