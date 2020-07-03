const knex = require('knex');
const configuration = require('../../../../knexfile'); 
const connection = knex(configuration.development || configuration.production);

module.exports = connection;