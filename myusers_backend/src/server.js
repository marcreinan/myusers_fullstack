const app = require('./api/v1/app');
var winston = require('winston');
winston.level = process.env.NODE_ENV == 'production' ? 'error' : 'debug';

const port = process.env.PORT || 3030; 

app.listen(port, function () { 
  winston.info(`MyUsers API - listening on port ${port}!`);
});