const express = require("express");
const router = express.Router();

router.get((req, res, next) => {
  res
    .status(404)
    .render("404", {
      title: "404",
      username: "m__mdy__m",
      name: "mahdi",
      age: "20",
      family: "mamashlis",
    });
});
module.exports = router;
