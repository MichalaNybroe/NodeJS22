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


// brug : i express

// ways to send data with GET
// this also works for all HTTP methods
// '1.
// path variables
// /deers/:id

// 2. 
// sende query paramtere (query string)
// /deers?key=value&key2=value2

app.get('/deers/:id', (req, res) => {
    if (Number(req.params.id) === 1) {
        res.send({ name: "Bambi", theBestAndOGDeer: true })
    } else {
        res.send({ errorMessage: "I do not know this deer" });
    }
});

// bruger ovenstående idet man kan dele links

app.get('/actors', (req, res) => {
    console.log(req.query.name)
    res.send( {
        message: "Information about the actor",
        ...req.query
    });
});

// ?age=32&name=Brad Pitt
// I browser white space bliver %20 i url
// ved at spreade foran bliver det informationer på samme niveau
// req.query.name

// Skal have en port at lytte på
app.listen(8080);
