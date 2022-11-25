import { Router } from "express"
import { sendMail } from "../util/mail"
const router = Router()

router.post("/contact", (req, res) => {
    const { email, message } = req.body

    sendMail(email, "We have received your message.", "Thank you for you message. We will reply within 5 workdays.")
})

export default router
