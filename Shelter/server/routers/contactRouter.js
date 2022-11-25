import { Router } from "express"
import { sendMail } from "../util/mail.js"
const router = Router()

router.post("/contact", (req, res) => {
    const { email, message } = req.body

    sendMail(email, "We have received your message.", "Thank you for you message. We will reply within 5 workdays.")
    .then(() => res.send( { message: "Message is received." }))
    .catch(() => res.status(400).send( { data: undefined, message: "Unsuccessful." } ))
})

export default router
