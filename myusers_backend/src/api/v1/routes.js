const express = require('express'); 

const SessionsController = require('./controllers/SessionsController');
const UsersController = require('./controllers/UsersController');

const routes = express.Router();
  routes.get('/', function (req, res) {
    res.statu(200).send('MyUsers API - Online');
  });
  routes.post('/api/v1/login', (req,res) => { SessionsController.login(req,res)});
  routes.get('/api/v1/users', (req,res) => { UsersController.index(req,res)});
  routes.post('/api/v1/charge', (req,res) => { UsersController.createMany(req,res)});

module.exports = routes; //Exporta as rotas