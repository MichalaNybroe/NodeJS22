import { Router } from "express";

const router = Router();

router.get("/popcorn/fill", (req,res) => {
    req.session.popcornAmount = 100;
    res.send({ popcornAmount: req.session.popcornAmount })
    console.log(req.session); //bliver sat en cookie
});

router.get("/popcorn/eat/:amount", (req, res) => {
    const amount = Number(req.params.amount);
    if (!amount) return res.send({ message: "Amount is not a number." });

    req.session.popcornAmount -= amount;
    console.log(req.session.popcornAmount);
    if (req.session.popcornAmount <= 20) {
        return res.redirect("/popcorn/fill");
    }
    res.send({ popcornAmount: req.session.popcornAmount })
});

export default router;
