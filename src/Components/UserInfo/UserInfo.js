import PropTypes from 'prop-types'
import React, { Component } from 'react'
import UserInfoUpdate from '../UserInfoUpdate/UserInfoUpdate'

export default class UserInfo extends Component {
//   static propTypes = {second: third}
  
  constructor(){
   super()
   this.state={
    show:true
   }
  }

  componentDidMount(){
    console.log('componentDidMount')
  }
  render() {
    return (
      <div>
       <h1>Life Cycle Method class Componenet</h1>
       {
        this.state.show ? <UserInfoUpdate />:null
       }
       <button onClick={()=>this.setState({show:!this.state.show})}>Toggle button</button>
      </div>
    )
  }
}
