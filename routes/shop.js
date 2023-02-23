const express = require('express');
const router = express.Router();

router.get("/homepage", (req, res, next) => {
  res.send("<h1>Welcome to Express!!</h1>");
});

module.exports = router;