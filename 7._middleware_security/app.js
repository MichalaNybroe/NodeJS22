import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const app = express();
app.use(helmet());

const allLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 80
});

app.use(allLimiter);

const frontdoorLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 6, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/frontdoor", frontdoorLimiter); //kan ved brug af postman se under headers at der nu er ratelimit reset etc.

import session from "express-session";
import popcornRouter from "./routers/popcornRouter.js"
app.use(session({
    secret: 'keyboard cat'/*fremover vil vi ikke hardcode secret*/,
    resave: false/*gem kun ved ændring*/,
    saveUninitialized: true/*giv mig noget*/,
    cookie: { secure: false /*ved true prøver den at sætte det op på https*/}
}));

app.use(popcornRouter);

function guidingButler(req, res, next) {
    console.log("This way, sir.");
    next();//Hvis ikke man kalder next kommer du ikke videre
};

function guardMiddleware(req, res, next) {
    console.log(req.query.name);
    if(req.query.name !== "Anders") {
        res.send({ message: "You are denied entry!" });    
    }
    req.fullname = "Anders Latif";
    next();
};

function ipLogger(req, res, next) {
    console.log(req.ip)
    next();
};

//app.use(ipLogger); // Gør brug af dette middleware på alle routes
app.use("/room", guidingButler); //specificering af hvor man vil gøre brug af middleware

app.get("/frontdoor", guardMiddleware, (req, res, next) => {
    res.send( {message: `Please enter ${req.fullname}.`} );
});

app.get("/room", (req, res, next) => {
    console.log("Room 1");
    next();
    //res.send({ message: "You are in room 1."})
});//Hvis man laver to get til samme endpoint når den aldrig til nummer to fordi den sender ved første

app.get("/room", (req, res, next) => {
    console.log("Room 2")
    res.send({ message: "You are in room 1."})
});

//wildcard
app.get("/*", (req, res) => {
    res.send(`<h1>404</h1><br><br><h3>Could not find this page.</h3>`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    console.log(error)
},
console.log("Server is running on port ", PORT)
);
