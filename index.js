const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const expressRoutes = require('./routes/express.js');
const contactRoutes = require('./routes/contact.js');
const successRoutes = require('./routes/success.js');

const bodyParser = require('body-parser');

const rootDir = require('./util/path.js');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', expressRoutes);
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/', contactRoutes);
app.use('/', successRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})


const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server is successfully running on PORT ${PORT}`);
});
