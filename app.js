const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('views engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended : false}))

app.post('/signUp', (req,res,next)=>{
    res.render('')
    res.redirect('/profiles')
})
app.post("/signIn",(res,res,next)=>{
    res.render('')
    res.redirect('/profiles')
    
})
app.get("/profiles", (res,req,next)=>{

})
app.listen(3000,()=>{
    console.log("server run on port 3000");
})