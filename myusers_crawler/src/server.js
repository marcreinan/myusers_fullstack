var express = require('express');
var axios = require("axios")
var winston = require('winston');
winston.level = process.env.NODE_ENV == 'production' ? 'error' : 'debug';

var app = express();
app.use(express.json())

async function getData() {
    let n = 1,
      total = 0
    try{
      do {
        await axios.get(`${process.env.URL_CRAWLER}?page=${n}`).then(
          res => {
            users = res.data.data
            if (!users) return
            total = res.data.total_pages
            postData(users);
          })
        n++
      } while (n <= total + 1)
    }catch(err){
      winston.error('Sem resposta da API Reqres')  
    }
  }
  
async function postData(users) {
  try {
    await axios.post(process.env.URL_API + 'charge', users)
    } catch (err) {
      winston.error('Sem resposta da API MyUsers')
    }
}

app.listen(process.env.PORT || 3000, function () {
  winston.info(`MyUsers CRAWLER API - list on port ${process.env.PORT}`)
  setInterval(getData, process.env.TTL)
});