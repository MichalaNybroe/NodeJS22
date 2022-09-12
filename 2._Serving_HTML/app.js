//const app = require("express") ();
const express = require("express");
const app = express();

console.log(__dirname);

app.use(express.static("public"));

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/public/frontpage.html")
});

app.listen(8081, () => console.log("Server is running on port ", 8081));