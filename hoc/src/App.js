import React, { Component } from 'react';
import  ButtonOne  from './components/ButtonOne';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonOne disable />
      </div>
    );
  }
}


