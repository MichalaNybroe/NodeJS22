const app = require("express") ();

const weapons = [ {id: 1, type: "Knife", name: "Butterknife", weight: "50g"}, {id: 2, type: "Gun", name: "Revolver 36x8", weight: "1.5kg"}, {id: 3, type: "Cannon", name: "Britannica", weight: "500kg"} ];

app.get("/weapons", (req, res) => {
    res.send({weapons});
});

app.get("/weapons/:id", (req, res) => {
    const id = Number(req.params.id);
    const weapon = weapons.find((weapon) => weapon.id === id)
    console.log(weapon)

    if (weapon !== undefined) {
        res.send({weapon})
    } else {
        res.send({errorMessage: "No weapon with this id"});
    }
});

app.listen(8080);