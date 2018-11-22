import React, { Component } from 'react';

export default class OneMoreList extends Component {
  state = {
    items: [],
    inputValue: ''
  }

  inputOnChange = e => {
    const { value } = e.target;
    this.setState({ inputValue: value })
  }

  buttonHandler = () => this.setState({ items: [...this.state.items, this.state.inputValue], inputValue: '' })
  deleteHandler = index => {
    const items = Object.assign([], this.state.items);
    items.splice(index, 1)
    this.setState({ items: items })
  }

  render() {
    return (
      <>
        <h3>Add and Delete users</h3>
        <input value={this.state.inputValue} onChange={this.inputOnChange} />
        <button onClick={this.buttonHandler}>Add</button>
        <h3>Users List: </h3>
        <ul>
          {
            this.state.items.map((value, index) => <li onClick={this.deleteHandler.bind(this, index)} key={`list-item-${index}`}>{ value }<span style={{ color: 'red', cursor: 'pointer' }}>x</span></li>)
          }
        </ul>
      </>
    );
  }
}

