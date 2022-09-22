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
        res.status(201).send({ data: weapon });
    } else {
        res.status(400).send({ data: undefined, message: "Name for weapon is required"})
    }
});

app.put("/weapons/:id", (req, res) => {
    if (req.body.name !== undefined) {
        const foundIndex = weapons.findIndex(weapon => weapon.id === Number(req.params.id));
    
        if (foundIndex !== -1) {
            const foundWeapon = weapons[foundIndex];
            const newWeapon = { ...foundWeapon, ...req.body, id: Number(req.params.id) };
            weapons[foundIndex] = newWeapon;
            res.status(200).send({ data: newWeapon })
        } else {
            res.status(404).send({ data: undefined, message: `No weapoon found by id: ${req.params.id}` });
        }
    } else {
        res.status(400).send({data: undefined, message: "Weapon given in incorrect form"});
    }
});

app.patch("/weapons/:id", (req, res) => {
    const foundIndex = weapons.findIndex(weapon => weapon.id === Number(req.params.id));

    if (foundIndex !== -1) {
        const foundWeapon = weapons[foundIndex];
        const weaponToUpdate = { ...foundWeapon, ...req.body, id: Number(req.params.id) };
        weapons[foundIndex] = weaponToUpdate;
        res.status(200).send({ data: weaponToUpdate })
    } else {
        res.status(404).send({ data: undefined, message: `No weapoon id found by id: ${req.params.id}` });
    }
});

app.delete("/weapons/:id", (req, res) => {
    const foundIndex = weapons.findIndex(weapon => weapon.id === Number(req.params.id));

    if (foundIndex !== -1) {
        const weapon = weapons.splice(foundIndex, 1)[0];
        res.status(200).send({ data: weapon })
    } else {
        res.status(404).send({ data: undefined, message: `No weapoon id found by id: ${req.params.id}` });
    }
});

app.listen(8080, () => console.log("Server is running on port ", 8080));