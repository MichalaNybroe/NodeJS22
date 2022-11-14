import express from "express";
const app = express();

app.use(express.json());
//import path from "path";
//app.use(express.static(path.resolve("../client/dist"))); // SSR compiled svelte files (index.html)

import cors from "cors";
app.use(cors()); //Tillader alle at hente - do not do this - instead specify
//vigtigt at cors er før dine routes

import animalsRouter from "./router/animalsRouter.js";
app.use(animalsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    console.log(error)
}, console.log('Server is running on port ', PORT));
