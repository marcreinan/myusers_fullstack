var express = require('express');
var axios = require("axios")

var app = express();
app.use(express.json())

async function getData() {
  return new Promise(async(res, rej) => {
    let n = 1,
      total = 0
    do {
      console.log('Recebendo dados...')
      await axios.get(`${process.env.URL_CRAWLER}?page=${n}`).then(
        res => {
          users = res.data.data
          if (!users) return
          total = res.data.total_pages
          postData(users);
        })
      n++
    } while (n <= total + 1)
  })
}

async function postData(users) {
  return new Promise(async(res, rej) => {
    try {
      console.log('Enviando dados...')
      await axios.post(process.env.URL_API + 'charge', users)
    } catch (rej) {
      console.log(rej)
    }
  })
}

app.listen(process.env.PORT || 3000, function () {
  setInterval(getData, process.env.TTL)
});