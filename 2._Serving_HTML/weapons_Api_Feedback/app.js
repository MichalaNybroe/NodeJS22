import express from "express";

const app = express();

app.use(express.json()); // forklaring kommer senere

const weapons = [
    {name: "knife"},
    {name: "AK-47"}
];

app.get("/weapons", (req, res) => {
    res.send({data: weapons});
})

app.listen(8080, () => console.log("Server running on port: " + 8080));