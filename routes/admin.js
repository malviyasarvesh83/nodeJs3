const express = require('express');

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><div style="margin-top: 10px;"><div style="margin-top: 10px;"><input type="text" name="name"></div><div style="margin-top: 10px;"><input type="number" name="size"></div><div style="margin-top: 10px;"><button type="submit">Add Product</button></div></div></form>'
  );
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop/homepage");
});


module.exports = router;