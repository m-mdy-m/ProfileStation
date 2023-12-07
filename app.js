const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('views engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended : false}))

app.get('/', (req,res,next)=>[
    res.render('signIn', {title : 'home'})
])
app.post('/signUp', (req,res,next)=>{
    res.render('signUp', {title : "signUp"})
    res.redirect('/profiles')
})
app.post("/signIn",(req,res,next)=>{
    res.render('signIn' , {title : "signIn"})
    res.redirect('/profiles')
    
})
app.post("/profiles", (req,res,next)=>{
    res.render("profiles", {title: "profile user"})
})
app.listen(3000,()=>{
    console.log("server run on port 3000");
})