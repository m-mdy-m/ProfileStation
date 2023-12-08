const express = require("express");
const router = express.Router();

router.get("/signUp", (req, res) => {
  res.render("signUp", {
    title: "signUp",
    path: "/signUp",
    username: "m__mdy__m",
    name: "mahdi",
    age: "20",
    family: "mamashlis",
    activeHome: false,
    activeSignIn: false,
    activeSignUp: true,
  });
});
module.exports = router;
