import React, { Component } from 'react';
import './App.css';
import { Todos } from './Todos'
import AddTodo from './AddForm'

export default class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    let itemsList = JSON.parse(localStorage.getItem('todos'))
    if (itemsList) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('todos'))
      })
    }
  }

  
  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }


  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  render() {
    return (
      <div className="container">
        <h1 className="center red-text">Todo List</h1>
        <p className='grey-text'>* To remove your todo - click on it</p>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}
