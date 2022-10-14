import express from "express";
import { renderPage } from "./util/templateEngine.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());


//Pages
const frontpage = renderPage("/frontpage/frontpage.html", { pageCss: `<link rel="stylesheet" href="./pages/frontpage/frontpage.css">` });
const loginPage = renderPage("/login/login.html", { tabTitle: "Login", pageCss: `<link rel="stylesheet" href="./pages/login/login.css">` });
const signupPage = renderPage("/login/forgotPW.html", { tabTitle: "Sign-Up", pageCss: `<link rel="stylesheet" href="./pages/login/forgotPW.css">` });
const setupPage = renderPage("/setup/setup.html", { tabTitle: "Set-Up NodeJs" });
const triviaPage = renderPage("/trivia/trivia.html", { tabTitle: "NodeJs Fun!" });
const commandToolPage = renderPage("commands/commands.html", { tabTitle: "NodeJs Commands"});
const adminPage = renderPage("/admin/admin.html", { tabTitle: "NodeJs Admin System", pageCss: `<link rel="stylesheet" href="./pages/admin/admin.css">` });

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
    res.send(commandToolPage);
});

app.get("/admin", (req, res) => {
    res.send(adminPage);
});

app.post("/login", (req, res) => {
    //check if login info is correct
    // redirect to adminpage id correct
});

app.post("/admin", (req, res) => {
    //post admin page
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server is running on port ", PORT)
});
