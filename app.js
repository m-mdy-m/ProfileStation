const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const routerDir = require("./views/util/path.js")
const app = express()
const home = require("./src/routes/home.js")
const signInRouter = require("./src/routes/signIn.js")
const signUpRouter = require("./src/routes/signUp.js")
const profileRouter = require("./src/routes/profiles.js")
const Err404Router = require("./src/routes/404.js")

app.set("view engine", "pug");
app.set("views", "views");

console.log(path.join(__dirname,'public'));
app.use(home)
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,'public')))



app.listen(3000,()=>{
    console.log("server run on port 3000");
})