import React, { Component, PureComponent } from 'react';
import { Test } from './Test'
import './App.css';

class App extends PureComponent { //Component
  state = {
    val: 1 //Math.random - everyTime it will update, couze we always will have new numbers
  }

  componentDidMount(){
    setInterval(() => {
      this.setState(()=>{
        return{ val: 1}
      })
    }, 1000)
  }

  // shouldComponentUpdate(nextProp, nextState){
  //   console.log('Next State',nextState)
  //   console.log("State",this.state)
  //   return(
  //     this.state.val === nextState.val ? false : true
  //   )
  // }

  render() {
    console.log('render App')
    return (
      <div className="App">
        <Test val={this.state.val}/>
      </div>
    );
  }
}

export default App;
