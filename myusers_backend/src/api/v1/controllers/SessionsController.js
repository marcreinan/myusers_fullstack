const connection = require('../../../database/connection'); //Import conexão ao Banco de Dados
const UsersController = require('./UsersController'); //Import UsersController
const axios = require('axios')

module.exports = {  
  async login(req,res){
    const { email, password } = req.body;
    const data = await axios.post(`${process.env.URL_API}/login`,{email: email, password: password})
    token = data.data.token
    if(!token) return res.status(400)
    return res.status(200).json({ auth: true, token: token })
  }
}