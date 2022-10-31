import express, { response } from "express";
import path from "path";

const app = express();  

app.use(express.urlencoded({ extended: true })); //Gør det muligt at modtage urlencoded (form data)
//extended true - nested : parse igennem alle niveauer
// parametre i form skal så have name for at virke

app.use(express.json());

app.use(express.static("public")); // Gør mappen statisk tilfængelig?

import pokemonRouter from "./routers/pokemonRouter.js";
app.use(pokemonRouter);


import contactRouter from "./routers/contactRouter.js";
app.use(contactRouter);

import { renderPage, injectData } from "./util/templateEngine.js";

const frontpagePage = renderPage("/frontpage/frontpage.html", {tabTitle: "Pokemon", cssLink: `<link rel="stylesheet" href="../pages/frontpage/frontpage.css">`});

const contactpagePage = renderPage("contact/contact.html", {});

const battlepagePage = renderPage("battle/battle.html", {cssLink: `<link rel="stylesheet" href="../pages/battle/battle.css">`});
//const pokemon = [{name: "Bulbasaur"}, {name: "Pichachu"} ]

app.get("/", (req, res) => {
    res.send(frontpagePage);
    //res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
});

// Få fat i 20 pokemon og vis på siden https://pokeapi.co/
// se frontpage.js

app.get("/battle/:pokemonName", (req, res) => {
    const pokemonName = req.params.pokemonName;
    const battlepagePageWithData = injectData(battlepagePage, { pokemonName }); //kan blive ved med at injecte data
    //injection i head fordi det ellers ikke er noget data jeg kan tilgå
    res.send(battlepagePageWithData.replace("%%TAB_TITLE%%", `Battle ${req.params.pokemonName}`));
    //res.sendFile(path.resolve("public/pages/battle/battle.html"));
});

const randomPokemon = ["pikachu", "slowpoke", "ditto", "ivysaur"];
app.get("/battle", (req, res) => {
    res.redirect(`/battle/${randomPokemon[Math.floor(Math.random() * randomPokemon.length)]}`);
});

app.get("/contact", (req, res) => {
    res.send(contactpagePage);
    //res.sendFile(path.resolve("public/pages/contact/contact.html"));
});


//const PORT = 8080; //equals final i java men er konstant i js

// () herunder er error. Hvis ikke den kan køre
// smider den fejlen
// error er undefined
// app.listen tager imod to argumenter: Number eller string som den konverterer til Number
// og en callback funktion

// const PORT = process.env.PORT ? process.env.PORT : 8080 // således køres enten env eller på port 8080
// hvis det ikke er defineret
const PORT = process.env.PORT || 8080;

console.log(Number(process.env.PORT));
const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port ", /*server.address().port*/PORT);
});

// Nogle gange vil man ikke have port angivet fast idet man ønsker det kan ændres i det enkelte miljø

//
console.log(undefined  || null || "" || 11 || 10);