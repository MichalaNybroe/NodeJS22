import { Router } from "express"
const router = Router()

import db from "../database/connection.js"

router.get("/api/animals", async (req, res, next) => {
    const data = await db.all("SELECT * FROM animals;")
    res.send({ data })
})

router.get("api/animals/:id", async (req, res, next) => {
    const data = await db.all("SELECT * FROM animals WHERE id=" + req.params.id + " LIMIT 1")
    res.send({ data })
})


router.post("/api/animals", async (req, res, next) => {
    const type = req.body.type
    const race = req.body.race || "Unknown"
    const ownName = req.body.ownName || "Figma"
    const age = req.body.age || "Unknown"
    const description = req.body.description
    const color = req.body.color
    const sex = req.body.sex
    const price = req.body.price  

    if (!type) return res.status(400).send({ message: "Type of animal is undefined." })
    if (!description) return res.status(400).send({ message: "Description is undefined." })
    if (!color) return res.status(400).send({ message: "Color is undefined." })
    if (!sex) return res.status(400).send({ message: "Sex is undefined." })
    if (!price) return res.status(400).send({ message: "Price is undefined." })
    
    const result = await db.run(`INSERT INTO animals(type, race, own_name, age, description, color, sex, price) 
    VALUES (?,?,?,?,?,?,?,?);`, [type, race, ownName, age, description, color, sex, price])
    res.send({ changes: result.changes }) //kan også sende lastID*/
});

export default router

