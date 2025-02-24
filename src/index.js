import express from "express"
import dotenv from "dotenv"
import routers from "../routes/index.js"

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(routers)

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})