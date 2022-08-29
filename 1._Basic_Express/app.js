//importer express
const express = require("express");
const app = express();

//Definer en get: det første den tager er endpoint og en callback funktion med to elementer
// Klient server model: Klient request til server, server laver response (HTTP REQUEST)
app.get("/", (request, response) => {
response.send({message: "Created my first route. Check!"});
});

// Skal have en port at lytte på
app.listen(8080);
