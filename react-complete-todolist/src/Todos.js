import React from 'react'

export const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ?
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span style={{ cursor: 'pointer'}}onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
        </div>
      )
    }) :
    <p className='center'>No todo's left</p>
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}
