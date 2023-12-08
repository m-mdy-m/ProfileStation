const express = require("express");
const router = express.Router();
const path = require('path')

router.get("/signIn", (req, res) => {
  res.render("signIn", {
    title: "signIn",
    path: "/SignIn",
    username: "m__mdy__m",
    name: "mahdi",
    age: "20",
    family: "mamashlis",
    activeHome: false,
    activeSignIn: true,
    activeSignUp: false,
  });
});
module.exports = router;
