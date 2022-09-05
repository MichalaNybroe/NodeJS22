//Adgang til bibliotek - husk npm install af package.json

//const express = require("express");
//const app = express();

// i en linje
const app =require("express")();


//starter server
app.listen(8080, () => {
    console.log("Server is up and running on port ", 8080);
});