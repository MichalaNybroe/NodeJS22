import express from "express"
const app = express()

app.use(express.json())

import cors from "cors"
app.use(cors({ credentials: true, origin: true })) //to use voth session and cors

import rateLimit from "express-rate-limit"
const allLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 80
})
app.use(allLimiter)

import helmet from "helmet"
app.use(helmet()) // To help set headers for security

import session from "express-session"
import crypto from "express"
app.use(session({
    secret: crypto().randomBytes(16).toString("hex"),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false /*http*/}
}))


// Routers
import { animalsRouter, loginRouter, contactRouter } from "./routers"
app.use(animalsRouter)
app.use(contactRouter)
app.use(loginRouter)


// Wildcard
app.get("/*", (req, res) => {
    res.send(`<h1>404</h1><br><br><h3>Could not find this page.</h3>`);
});



const PORT = Number(process.env.PORT) || 8080
app.listen(PORT, (error) => {
    console.log(error)
}, console.log('Server is running on port ', PORT))
