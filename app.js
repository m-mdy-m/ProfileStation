const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const home = require("./src/routes/home.js");
const signInRouter = require("./src/routes/signIn.js");
const signUpRouter = require("./src/routes/signUp.js");
const { engine } = require("express-handlebars");
// Config install EjS

app.set("view engine", "ejs");

// CONFIG INSTALL HBS
// app.engine(
//   "hbs",
//   engine({
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
// app.set("view engine", "hbs");

/// CONFIG INSTALL PUG
// app.set("view engine", "pug");

app.set("views", "views");

console.log(path.join(__dirname, "public"));
app.use(home);
app.use(signInRouter);
app.use(signUpRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.status(404).render("404", {
    layout: "main-layout",
    title: "404 - Page Not Found",
    username: "m__mdy__m",
    name: "mahdi",
    age: "20",
    family: "mamashlis",
    path: req.path,
  });
});
app.listen(3000, () => {
  console.log("server run on port 3000");
});
