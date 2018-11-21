import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Redirect, Prompt } from 'react-router-dom';
import { User } from './User'

export default class App extends Component {
  state = {
    loggedIn: false
  }

  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  render() {
    return (
      <Router>
        <>
          <ul>
            <li><NavLink to='/' exact activeStyle={{ color: 'blue' }}>Home</NavLink></li>
            <li><NavLink to='/about' exact activeStyle={{ color: 'blue' }}>About</NavLink></li>
            <li><NavLink to='/user:John' exact activeStyle={{ color: 'blue' }}>John</NavLink></li>
            <li><NavLink to='/user:Frank' exact activeStyle={{ color: 'blue' }}>Frank</NavLink></li>
          </ul>
          <Prompt when={!this.state.loggedIn}
                  message={(location) => { return location.pathname.startsWith('/user') ? 'Try to LogIn' : true }} />
          <input type="button" value={this.state.loggedIn ? 'LogOut' : 'LogIn'} onClick={this.loginHandle} />
          <Route exact path='/' render={() => { return (<h1>Welcome to homepage</h1>) }} />
          <Route exact path='/about' strict render={() => { return (<h1>About</h1>) }} />
          <Route exact path='/user:username' strict render={({ match }) => (this.state.loggedIn ? <User username={match.params.username} /> : <Redirect to='/' />)} />
        </>
      </Router>

    );
  }
}


