import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

const mapStoreToProps = store => {
  return{
    a: store.reducerA.a,
    b: store.reducerB.b
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateA: (b) => dispatch({ type: "UPDATE_A", b: b}),
    updateB: (a) => dispatch({ type: "UPDATE_B", a: a})
  }
}


class App extends Component {
  render() {
    return (
      <>
        <div className='col'>
          <span>A:</span>
          <span>{this.props.a}</span>
        </div>
        <button onClick={() =>  this.props.updateA(this.props.b)}>Update A</button>
        <div className='col'>
          <span>B:</span>
          <span>{this.props.b}</span>
        </div>
        <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
      </>
    );
  }
}

export default connect(mapStoreToProps, mapDispatchToProps )(App);
