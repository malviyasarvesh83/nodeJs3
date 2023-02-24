const express = require("express");
const path = require("path");

const rootDir = require("../util/path.js");

const router = express.Router();

router.get("/shop/contactUs", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

router.post("/shop/contactUs", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop/success");
});

module.exports = router;
