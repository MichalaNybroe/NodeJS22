import { Router } from "express";
const router = Router();

//router.get("/contact", (req, res) => {

//});

router.post("/api/contact", (req, res) => {
    console.log(req.body)
    res.send( req.body );
})

export default router;