import React, { Component } from 'react'


export default class AddTodo extends Component {
  state = { 
    content: ''
   }

   handleChange = (e) => {
     this.setState({
       content: e.target.value
     })
   }

   handleSubmit = (e) => {
     e.preventDefault();
     this.props.addTodo(this.state)
     this.setState({
       content: ''
     })
   }


  render() { 
    return ( 
      <div className='input-field col s6'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='add'>Add new todo</label>
          <input id='add' className=''type="text" onChange={this.handleChange} value={this.state.content} maxLength='150'/>
        </form>
      </div>
     );
  }
}
