import express from "express";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("frontpage/frontpage.html"));
});


