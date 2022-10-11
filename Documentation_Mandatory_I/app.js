import express from "express";
import path from "path";
import { renderPage } from "./util/templateEngine.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());


//Pages
const frontpage = renderPage("/frontpage/frontpage.html", { pageCss: `<link rel="stylesheet" href="./pages/frontpage/frontpage.css">`});
const loginPage = renderPage("/login/login.html", {tabTitle: "Login", pageCss: `<link rel="stylesheet" href="./pages/login/login.css">`});
const signupPage = renderPage("/login/forgotPW.html", {tabTitle: "Sign-Up", pageCss: `<link rel="stylesheet" href="./pages/login/forgotPW.css">`});
const setupPage = renderPage("/setup/setup.html", {tabTitle: "Set-Up NodeJs"});
const triviaPage = renderPage("/trivia/trivia.html", {tabTitle: "NodeJs Fun!"});
const commandPage = renderPage("commands/commands.html", {tabTitle: "NodeJs Commands"});
const toolPage = renderPage("/tools/tools.html", {tabTitle: "NodeJs Tools"});

app.get("/", (req, res) => {
    res.send(frontpage);
});

app.get("/login", (req, res) => {
    res.send(loginPage);
});

app.get("/forgotPassword", (req, res) => {
    res.send(signupPage);
});

app.get("/setup", (req, res) => {
    res.send(setupPage);
});

app.get("/trivia", (req, res) => {
    res.send(triviaPage);
});

app.get("/commands", (req, res) => {
    res.send(commandPage);
});

app.get("/tools", (req, res) => {
    res.send(toolPage);
});

app.post("/login", (req, res) => {
    //Wait for form day 10/10
    // make post for signup
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server is running on port ", PORT)
});
