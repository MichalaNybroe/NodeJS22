const app = require("express") ();

const weapons = [ {name: "Knife", id: 1}, {name: "gun", id: 2}, {name: "canon", id: 3} ];

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