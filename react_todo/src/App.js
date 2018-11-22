import React, { Component } from 'react';
import { User } from './User'
import OneMoreList from './reactjslist8'


export default class App extends Component {
  state = {
    users: [
      { name: 'Bob', age: 24 },
      { name: 'Steve', age: 60 },
      { name: 'Frank', age: 90 }
    ],
  }

  delUser = (index) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({ users: users })

  }
  render() {
    return (
      <div className="App">
        <h1>Users list</h1>
        <ul>
          {
            this.state.users.map((user, index) => {
              return (
                <User age={user.age} delEvent={this.delUser.bind(this, index)} key={index}>{user.name}</User>)
            })
          }
        </ul>
        <OneMoreList />
      </div>
    );
  }
}
