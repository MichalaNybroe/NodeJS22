import { Router } from "express"
const router = Router()

import db from "../database/connection.js"


router.post("/login", async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
})

router.post("/signUp", async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const passwordTwo = req.body.passwordTwo
});

router.post("/forgotPassword", async (req, res, next) => {
    const email = req.body.email
})

export default router
