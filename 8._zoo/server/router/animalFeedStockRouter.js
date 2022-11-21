import { Router } from "express";
const router = Router();

import db from "../database/connection_mysql";

router.get("/animalfeedstock", (req, res) => {
    const [rows, fields] = db.query("SELECT * FROM animal_feed_stock;");
    res.send({ data: rows });
});

router.post("/animalfeedstock", async (req, res) => {
    const { initialAmount, remainingAmount, animalFeedTypeId } = req.body;

    if (!animalFeedTypeId) return res.status(400).send({ message: "Missing key stockTypeId" });
    if (!initialAmount) return res.status(400).send({ message: "Missing key initial amount" });
    
    const [result, _] = await db.query("INSERT INTO animal_feed_stock (initial_amount, remaining_amount, animal_feed_type_id) VALUES(?, ?, ?)", [initialAmount, remainingAmount || initialAmount, animalStockTypeId]);

    res.send({ affectedRows: result.affectedRows });
});


export default router;
