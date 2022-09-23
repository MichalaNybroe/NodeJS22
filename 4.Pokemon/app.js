import express from "express";
import path from "path";

const app = express();

app.use(express.static("public")); // Gør mappen statisk tilfængelig?

const pokemon = [{name: "Bulbasaur"}, {name: "Pichachu"} ]

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage.html"));
});

app.get("/pokemon", (req, res) => {
    //res.send({ data: pokemon })
    res.send({ data: ["Slowpoke"] })
});


// () herunder er error. Hvis ikke den kan køre
// smider den fejlen
app.listen(8080, () => {
    console.log("Server is running on port ", 8080)
});