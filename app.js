const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const routerDir = require("./views/util/path.js")
const app = express()
const signInRouter = require("./src/routes/signIn.js")
const signUpRouter = require("./src/routes/signUp.js")
const profileRouter = require("./src/routes/profiles.js")
const Err404Router = require("./src/routes/404.js")
app.set('views engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(routerDir,'public')))

app.use("/",(req,res)=>{
    res.send('test')
})

app.listen(3000,()=>{
    console.log("server run on port 3000");
})