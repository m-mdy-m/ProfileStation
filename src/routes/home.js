const express = require("express");
const path = require('path')
const router = express.Router();
router.get("/", (req, res) => {
  res.render("home", {
    title: "home",
    path: "/",
    username: "m__mdy__m",
    name: "mahdi",
    age: "20",
    family: "mamashlis",
    styles:'/css/home/home.css',
    activeHome: true,
    activeSignIn: false,
    activeSignUp: false,
  });
});
module.exports = router;
