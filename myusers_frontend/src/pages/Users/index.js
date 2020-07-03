import React, { Component } from 'react'
import { FiPower } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './style.css';
import UserCards from '../../components/UserCards'
import UserTable from '../../components/UserTable'
import logoImg from '../../assets/img/logo.png';

export default class Users extends Component{
  constructor(props){
    super(props)
    var token = localStorage.getItem('token')
    if(!token){
      this.props.history.push("/")
    }
    this.state = {
      view: "cards"
    }
  }

  logoffHandler = () => {
    localStorage.removeItem('token')
    this.props.history.push("/")
  }
  changeViewHandler = () => {
    if(this.state.view === "cards"){
      this.setState({view: "lista"});
    }else{
      this.setState({view: "cards"});
    }
  }
   
  render(){
    return (
      <div className="profile-container">
        <header>
          <img src={logoImg} alt="MyUsersClient"/>
          <span>MyUsersClient</span>
          <Link type="button" className="button" onClick={this.changeViewHandler}>Ver em {this.state.view}</Link>
          <button type="button" onClick={this.logoffHandler}><FiPower size={18} color="#E02041"></FiPower></button>           
        </header>
      <h1>Usuários cadastrados</h1>
      {(this.state.view === "cards")?(
          <UserTable/>
        ):(
          <UserCards/>
      )}
    </div>
  );
  }
}