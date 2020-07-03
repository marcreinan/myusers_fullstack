import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import api from '../services/api';

export default class UserList extends Component {
  state = {
    items: [],
    page: 1,
    length: 4
  }

  componentDidMount() {    
    api.get(`users?size=5&page=1`).then( response => {
      let users = response.data.data
      this.setState({
        items: this.state.items.concat(users),
        page: this.state.page + 1,
        length: this.state.length + users.length
      })
    })
  }

  fetchMoreData = () => {
    api.get(`users?size=5&page=${this.state.page}`).then( response => {
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
          <ul>
          {this.state.items.map((user) => (
              <li key={user.id}>
                <img className="avatar" src={user.avatar} alt="avatar"/>  
                <strong>Nome:</strong>
                <p> {user.first_name} {user.last_name}</p>

                <strong>Email:</strong>
                <p>{user.email}</p>
              </li>
          ))}
          </ul>
        </InfiniteScroll>
    );
  }
}
