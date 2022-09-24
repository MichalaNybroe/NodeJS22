import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage.html"))
});

// if no port is given use 8080, heroku will automatically assign a random port
app.listen(process.env.PORT || 8080, () => {console.log("Server is running on port ", 8080)});