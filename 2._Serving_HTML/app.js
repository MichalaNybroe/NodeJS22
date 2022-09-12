//const app = require("express") ();
//const express = require("express");
const app = express();
// express via module - den kigger i node modules om der er en mappe som hedder express
import express from "express";

app.use(express.static("public"));

// require("package.json") common js
// modul
// kan ikke læse common filer kun scripts - derfor benyt common js

import { incrementVisitorCounter } from "./geocitiesUtil.js";
//const {incrementVisitorCounter} = require("./geocitiesUtil.js");


import path from "path";

app.get("/",(req, res) => {
    console.log("Visitors sonce the server started", incrementVisitorCounter())
    //__dirname er noget defineret i cm ikke i module
    // res.sendFile(__dirname + "/public/frontpage.html")
    res.sendFile(path.resolve("./public/frontpage.html"));
});

app.listen(8081, () => console.log("Server is running on port ", 8081));