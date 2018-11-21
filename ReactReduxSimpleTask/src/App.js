import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div>
          Age: <span>{this.props.age}</span><br/>
          <button onClick={this.props.onAgeUp}>Age Up</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
          <hr/>
          <div>History</div>
          <div>
            <ul>
              {
                this.props.history.map((item, index) => (
                  <li key={index} >
                    {item.age}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return{
    age: state.age,
    history: state.history
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1}),
  }
}
export default connect(mapStateToProps,mapDispatchToProps )(App);
