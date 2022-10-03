import express from "express";
import path from "path";
import { renderPage } from "./util/templateEngine.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());


//Pages
const frontpage = renderPage("/frontpage/frontpage.html", { pageCss: `<link rel="stylesheet" href="./pages/frontpage/frontpage.css">`});
const login = renderPage("/login/login.html", {tabTitle: "Login", pageCss: `<link rel="stylesheet" href="./pages/login/login.css">`});
const signup = renderPage("/login/signup.html", {tabTitle: "Sign-Up", pageCss: `<link rel="stylesheet" href="./pages/login/signup.css">`});

app.get("/", (req, res) => {
    res.send(frontpage);
});

app.get("/login", (req, res) => {
    res.send(login);
});

app.get("/signup", (req, res) => {
    res.send(signup);
});

app.post("/login", (req, res) => {
    //Wait for form day 10/10
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server is running on port ", PORT)
});
