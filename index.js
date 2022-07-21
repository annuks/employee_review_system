const express = require("express");
const app = express();
const PORT = 8000;

//adding ejs as view engine
const ejs = require("ejs");
const path = require("path");

const db = require ('./config/mongoose');

//for creating session cookie
const session = require("express-session");
const passport = require('passport');
const passportLocal = require ('./config/passport-local-strategy');
const cookieParser =require('cookie-parser');

app.use(
  session({
    name: "emp-review-sys",

    //to do change the secret before deployment in production mode
    secret: "random",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
//adding express layout for creating partials
const expressLayouts = require("express-ejs-layouts");

// using saas as middleware
const sassMiddleware = require("node-sass-middleware");

// scss middleware
app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    debug: false,
    outputStyle: "extended",
    prefix: "/css",
  })
);
app.use(expressLayouts);
//for connection with static directory
app.use(express.static("./assets"));
app.set("layout extractStyles", true),
  app.set("layout extractScripts", true),
  app.use(express.urlencoded());
//app.use(cookieParser);

//settig route
app.use("/", require("./routes"));
app.use("*", (req, res) => {
  res.send("Page Not Found");
});

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in Connection with Server");
    return;
  } else {
    console.log("Server is up and Running on Port:", PORT);
  }
});
