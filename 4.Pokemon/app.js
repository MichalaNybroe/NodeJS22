import express, { response } from "express";
import path from "path";

const app = express();

app.use(express.json());

app.use(express.static("public")); // Gør mappen statisk tilfængelig?

const pokemon = [{name: "Bulbasaur"}, {name: "Pichachu"} ]

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage/frontpage.html"));
});

app.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(result => res.send({ data: result}))
    // res.send({ data: pokemon })
    // res.send({ data: ["Slowpoke"] })
});

// Få fat i 20 pokemon og vis på siden https://pokeapi.co/
// se frontpage.js

app.get("/battle/:pokemonName", (req, res) => {
    res.sendFile(path.resolve("public/battle/battle.html"));
});

app.get("/battle", (req, res) => {
    const randomPokemon = "pichachu";
    res.redirect(`/battle/${randomPokemon}`);
});

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve("public/contact/contact.html"));
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