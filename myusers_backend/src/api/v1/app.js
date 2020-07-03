const express = require('express');
const cors = require('cors');
const routes = require('./routes');
 
const app = express(); 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Total-Count, Content-Type, Accept");
  next();
});

app.use(express.json()); 
app.use(routes);

module.exports = app;