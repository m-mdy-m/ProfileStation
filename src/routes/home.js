const express = require('express')
const router = express.Router()
const path = require("path")
const pathRouter = require("../../views/util/path.js")
router.get("/", (req,res)=>{
    res.render('home', {title : "home", path:'/'})
})
module.exports = router