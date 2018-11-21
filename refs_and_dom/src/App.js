import React, { Component } from 'react';
import { Func } from './FunctionComponent'


import './App.css';

export default class App extends Component {

  inputValue = () => {
    alert( `${this.firstName.value} ${this.lastName.value}`)
  }

  switchWindow = (target, e) => {
    if (e.keyCode === 13) {
      switch (target) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus()
          break;
        default:
          this.firstName.focus();
      }
    }
  }

  render() {
    return (
      <>
      <Func/>
        <div>
          <span>First Name: </span>
          <input ref={(input) => { this.firstName = input }}
            type="text"
            onKeyUp={this.switchWindow.bind(this, 'firstName')} />
        </div>
        <div>
          <span>Last Name: </span>
          <input ref={(input) => { this.lastName = input }}
            type="text"
            onKeyUp={this.switchWindow.bind(this, 'lastName')} />
        </div>
        <div>
          <span>Age: </span>
          <input ref={(input) => { this.age = input }}
            type="text"
            onKeyUp={this.switchWindow.bind(this, 'age')} />
        </div>
        <div>
          <input type="submit"
            value='submit'
            ref={(input) => this.submit = input}
            onClick={this.inputValue}
            onKeyUp={this.switchWindow.bind(this, 'submit')}
          />
        </div>
      </>
    );
  }
}

