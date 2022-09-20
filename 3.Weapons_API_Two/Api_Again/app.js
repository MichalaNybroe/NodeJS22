import express from "express";
import path from "path";

const app = express();
app.use(express.json());

let weapons = [{id: 1, type: "Knife", name: "Slicer"}, {id:2, type: "Gun", name: "Shotgun 4000"}, {id: 3, type: "Gun", name: "AK-47"}];
let nextId = 4;

// Routes
app.get("/weapons", (req, res) => {
    res.send({ data: weapons });
});

app.get("/weapons/:id", (req, res) => {
    const weapon = weapons.find(weapon => weapon.id === Number(req.params.id));

    if (weapon !== undefined) {
        res.send({ data: weapon })
    } else {
        res.status(404).send({ data: undefined, message: `No weapon is found by id ${req.params.id}`});
    }
});

app.post("/weapons", (req, res) => {
    if (req.body.name !== undefined) {
        const weapon = req.body;
        weapon.id = nextId++;
        weapons.push(weapon);
        res.send({ data: weapon });
    } else {
        res.status(400).send({ data: undefined, message: "Name for weapon is required"})
    }
});

app.put("/weapons/:id", (req, res) => {

});

app.patch("/weapons/:id", (req, res) => {

});

app.delete("/weapons/:id", (req, res) => {

});

app.listen(8080, () => console.log("Server is running on port ", 8080));