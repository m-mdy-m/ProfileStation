const express = require("express");
const router = express.Router();
const path = require("path");
const pathRouter = require("../../views/util/path.js");
router.get("/", (req, res) => {
  res.render("home", {
    title: "home",
    path: "/",
    username: "m__mdy__m",
    name: "mahdi",
    age: "20",
    family: "mamashlis",
  });
});
module.exports = router;
