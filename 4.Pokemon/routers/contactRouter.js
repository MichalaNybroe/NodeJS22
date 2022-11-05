import { Router } from "express";
import { sendMail } from "../util/mail.js";

const router = Router();

router.post("/api/contact", (req, res) => {
    console.log(req.body)
    sendMail(req.body.nameInput, req.body.emailInput,"Review Registration", "Your review has been registered. Thank you for your feedback.", "<p>Your review has been registered.</p>")
    .then(() => res.send( { message: "Received review." }))
    .catch(() => res.status(400).send( { data: undefined, message: "Unsuccessful." } ));
})

export default router;