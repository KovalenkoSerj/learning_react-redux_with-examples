import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Test } from './Test'

Test.propTypes = {
  str: PropTypes.string,
  bool: PropTypes.bool,
  str0num: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  array: PropTypes.arrayOf(PropTypes.number),
  arrayOfObj: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  })),
  children: PropTypes.string
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Test str={'some string'}
          bool
          str0num={10}
          array={[1, 2, 3]}
          arrayOfObj={[{ name: 'John', age: 10 }, { name: 'Steve', age: 25 }]}
        >Children</Test>
      </div>
    );
  }
}

