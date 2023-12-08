const express = require("express");
const router = express.Router();

router.get("/signIn", (req, res) => {
  res.render("signIn", {
    title: "signIn",
    path: "/signIn",
    username: "m__mdy__m",
    name: "mahdi",
    age: "20",
    family: "mamashlis",
  });
});
module.exports = router;
