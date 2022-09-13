import express from "express";

const app = express();
app.use(express.json());

// Weapons
let weapons = [ {id: 1, type: "Knife", name: "Butterknife", weight: "50g"}, {id: 2, type: "Gun", name: "Revolver 36x8", weight: "1.5kg"}, {id: 3, type: "Cannon", name: "Britannica", weight: "500kg"} ];


app.get("/weapons", (req, res) => {
    res.send({data: weapons})
});

app.get("/weapons/:id", (req, res) => {
    //res.send({weapon: weapons.filter(weapon => weapon.id === req.param.id)});
    const weapon = weapons.find((weapon) => weapon.id === Number(req.params.id));
    if (weapon !== undefined) {
        res.send({data: weapon})
    } else {
        res.send({errorMessage: "No weapon with this id"});
    }
});

let idCounter = weapons.length + 1;
app.post("/weapons", (req, res) => {
    if (req.query.name !== undefined) {
        weapons.push({id: idCounter, type: req.query.type, name: req.query.name, weight: req.query.weight});
        res.send({message: "Weapon has been added."})
    } else {
        res.send({errorMessage: "Weapon given in incorrect form"})
    }
});

app.put("/weapons/:id", (req, res) => {
    weapons = weapons.map((w) => {
        if (w.id === Number(req.params.id)) {
            return {id: Number(req.params.id), type: req.query.type, name: req.query.name, weight: req.query.weight};
        }
        console.log(w)
        return w;
    })
    console.log(weapons);
    res.send({message: "Weapon has been updated"});
});

app.delete("/weapons/:id", (req, res) => {
    const weapon = weapons.filter((w) => {
        if (w.id === Number(req.params.id)) {
            return w;
        }
    })

    if (weapon[0] !== undefined) {
        const index = weapons.indexOf(weapon.id);
        weapons.splice(index, 1);
        res.send({message: "Weapon has been removed"});
    } else {
        res.send({errorMessage: "Unable to remove weapon"})
    }
});

app.listen(8080, () => console.log("Server is running on port: " + 8080));