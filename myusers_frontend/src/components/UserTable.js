import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import api from '../services/api';

export default class UserTable extends Component {
  state = {
    items: [],
    page: 1,
    length: 4
  }

  async componentDidMount() {    
    await api.get(`users?size=4&page=1`).then( response => {
      let users = response.data.data
      this.setState({
        items: this.state.items.concat(users),
        page: this.state.page + 1,
        length: this.state.length + users.length
      })
    })
  }
  
  fetchMoreData = async() => {
    await api.get(`users?size=4&page=${this.state.page}`).then( response => {
      let users = response.data.data
      this.setState({
        items: this.state.items.concat(users),
        page: this.state.page + 1,
        length: this.state.length + users.length
      });
    });
  };

  render() {
    return (
        <InfiniteScroll
          dataLength={this.state.length}
          next={this.fetchMoreData}
          hasMore={true}
        >
          <table className="userList">
            <thead>
              <tr>
                <th>ID</th>
                <th>Avatar</th>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
            {this.state.items.map((user) => (
              <tr key={user.id}>
              <td >
                <strong>{user.id}</strong>
              </td>  
              <td >
                <img src={user.avatar} alt="avatar"/>
              </td>  
              <td >
                {user.first_name} {user.last_name}
              </td>  
              <td >
                {user.email}
              </td>  
            </tr>
            ))}
            </tbody>
        </table>
      </InfiniteScroll>
    );
  }
}
