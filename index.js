const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/add-product', (req, res, next) => {
    res.send(
      '<form action="/product" method="POST"><div style="margin-top: 10px;"><div style="margin-top: 10px;"><input type="text" name="name"></div><div style="margin-top: 10px;"><input type="number" name="size"></div><div style="margin-top: 10px;"><button type="submit">Add Product</button></div></div></form>'
    );
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Welcome to Express!!</h1>');
})

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server is successfully running on PORT ${PORT}`);
});
