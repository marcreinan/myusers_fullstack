const app = require('./api/v1/app');

const port = process.env.PORT || 3030; 

app.listen(port, function () { 
  console.log(`MyUsers API - listening on port ${port}!`);
});