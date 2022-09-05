//importer express
const express = require("express");

//instatiere library
const app = express();

//Definer en get: det første den tager er endpoint og en callback funktion med to elementer
// Klient server model: Klient request til server, server laver response (HTTP REQUEST)
//route   //endpoint  //callback funktion hvor det sendes som argument
app.get("/", (request, response) => {
response.send({message: "Created my first route. Check!"});
});

app.get('/cups', (req, res) => {
    res.send({ color: "These cups are blue!" })
});

// Skal have en port at lytte på
app.listen(8080);
