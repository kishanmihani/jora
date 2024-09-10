import PropTypes from 'prop-types'
import React, { Component } from 'react'
import UserInfoUpdate from '../UserInfoUpdate/UserInfoUpdate'

export default class UserInfo extends Component {
  constructor(props){
   super(props);
   
  this.state={
    counter:0
  }
  this.increment = this.increment.bind(this);
  this.Decrement = this.Decrement.bind(this);
  }
  increment(){
    console.log(this.state.counter)
    this.setState((prevState) => ({
      counter: prevState.counter + 4
    }));
  }
  Decrement(){
    this.setState((prevState) => {
      const newValue = prevState.counter - 3;
      if (newValue < 0) {
        return { counter: 0 };
      }
      return { counter: newValue };
    });
    
  }
  render() {
    return (
      <div>
         <div>
          <h1>{this.state.counter}</h1>

          <button onClick={this.increment} >Increment count value 4</button>
          <br></br>
         <button onClick={this.Decrement}>Decrement count value 3</button>
         </div>
      </div>
    )
  }
}
