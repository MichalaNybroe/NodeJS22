import express from "express"
const app = express()

app.use(express.json())

import cors from "cors"
app.use(cors())

import animalsRouter from "./routers/animalsRouter.js"
app.use(animalsRouter)

import loginRouter from "./routers/loginRouter.js"
app.use(loginRouter)

const PORT = process.env.PORT || 8080
app.listen(PORT, (error) => {
    console.log(error)
}, console.log('Server is running on port ', PORT))
