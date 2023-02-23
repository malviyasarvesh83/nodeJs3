const http = require("http");
const routes = require("./routes");
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next();
})

app.use((req, res, next) => {
    console.log('In the another middleware!');
    res.send('<h1>Hello from Express</h1>');
})

const server = http.createServer(app);

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`server is successfully running on PORT ${PORT}`);
});
