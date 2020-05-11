const express = require('express');
const logger = require('morgan')('dev');
const db = require('./models');
const app = express();

db.sequelize.sync();
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(4000, () => {
  console.log('on 4000');
});
