import { Router } from "express";
const router = Router();

import db from "../database/connection_sqlite.js";

//const animals = ["🦩", "🐶", "🦍", "🦄", "🦚"];

router.get("/api/animals", async (req, res, next) => {
    const data = await db.all("SELECT * FROM animals;")
    res.send({ data });
});

router.post("/api/animals", async (req, res, next) => {
    const commonName = req.body.commonName;
    const latinName = req.body.latinName || "Unknown";
    const ownName = req.body.ownName || "None";
    if (!commonName) return res.status(400).send({ message: "Common name is not defined!" });

    //farligt!! kan lave sql injection
    const result = await db.run(`INSERT INTO animals (common_name, latin_name, own_name) VALUES (?, ?, ?);`, [commonName, latinName, ownName]);
    res.send({ changes: result.changes }) //kan også sende lastID
});

export default router;
