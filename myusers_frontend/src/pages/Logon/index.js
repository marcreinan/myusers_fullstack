import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './style.css';
import usersImg from '../../assets/img/users.png';
import logoImg from '../../assets/img/logo.png'

export default function Logon(){
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const history = useHistory();
  async function handleLogin(e){
    e.preventDefault();

    try{
      const response = await api.post('login', { email: email, password: password })
      localStorage.setItem('token', response.data.token);

      history.push('/users');
    }catch(err){
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
          <img src={logoImg} alt="MyUsersClient"/>
          <form onSubmit={handleLogin}>
            <h1>MyUsersClient<br/><small> Faça seu login e acesse nosso Client</small></h1>
            <input placeholder="Digite seu email"
              value={email}
              type="email"
              onChange={ e => setEmail(e.target.value)}/>
            <input placeholder="Digite sua Senha"
              value={password}
              type="password"
              onChange={ e => setPassword(e.target.value)}/>
            <button className="button" type="submit">Entrar</button>
          </form>
        </section>
      <img src={usersImg} alt="Users"/>
    </div>
  );
}