// Dummy objekt til definering af routes
import { Router } from "express";
const router = Router();

router.get("/api/pokemon", (req, res) => { //Bid mærke i at man kalder get på router
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(result => res.send({ data: result}))
});

export default router;