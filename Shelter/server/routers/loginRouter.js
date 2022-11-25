import { Router } from "express"
const router = Router()

import db from "../database/connection.js"
import rateLimit from "express-rate-limit";
import { comparePassword, encryptPassword } from "../util/encryption.js";
import { sendMail } from "../util/mail.js";

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 6
})

router.use(loginLimiter);

router.post("/login", async (req, res, next) => {
    const { email, password } = req.body

    const user = await db.get("SELECT * FROM users WHERE email=?;", [email])

    if (!user || await !comparePassword(password, user.password)) {
        res.status().send({ message: "Login failed." })
    }

    req.session.isLoggedIn = true
    req.session.email = email
    res.status(200).send({ message: "Login successful" })
})

router.post("/signUp", async (req, res, next) => {
    const { email, password } = req.body

    // send mail for confirmation so store password for later?
    sendMail(email, "Sign Up Confirmation", "You need to confirm this mail to proceed with login.")
    .then(() => res.send( { message: "An email confirmation has been send." }))
    .catch(() => res.status(400).send( { data: undefined, message: "Unsuccessful." } ))
})   

router.post("/forgotPassword", async (req, res, next) => {
    const email = req.body.email

    //send mail to be confirmed in order to receive link to change password
    sendMail(email, "Change Password", "You have regquested a new password. Proceed with link below to change password. xxxx")
    .then(() => res.send( { message: "An email confirmation has been send." }))
    .catch(() => res.status(400).send( { data: undefined, message: "Unsuccessful." } ));
})

router.post("/logout", (req, res) => {
    req.session.destroy()
    res.send({ message: "Logged out."})
})

export default router
