import React, { Component } from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Contact } from './components/Contact';
import SinglePost from './components/SinglePost'



export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/:post_id' component={SinglePost} />
          </Switch>
        </div>
      </Router>
    );
  }
}

