import PropTypes from 'prop-types'
import React, { Component } from 'react'
import UserInfoUpdate from '../UserInfoUpdate/UserInfoUpdate'
import Classmouse from '../../Config/Practice/Classmouse';

export default class UserInfo extends Component {
  constructor(props){
   super(props);
   
  this.state={
    counter:0,
    count:0,
    name:'',
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
  componentDidMount(){
    // alert(1)
    document.title=`Clicked ${this.state.count} times`;
    this.interval=setInterval(this.tick,1000);
  }
  componentDidUpdate(prevState,prevProps){
    console.log(prevState,prevProps);
    console.log(this.state.name);
    document.title=`Clicked ${this.state.count} times`
  }
  componentWillUnmount(){
    // alert(3)
    clearInterval(this.interval)
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
         <input className='form-control' value={this.state.name} type='text' onChange={(e)=>this.setState({name:e.target.value})}></input>
         <p>{this.state.count}</p>
         <button onClick={()=>this.setState({count:this.state.count + 1})}>Increase count value</button>
           <Classmouse></Classmouse>
      </div>
    )
  }
}
