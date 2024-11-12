import React, { Component } from 'react'
import  './TestIndex.css'
import { Outlet } from 'react-router-dom'
import TestFooter from './TestFooter/TestFooter'
export default class TestIndex extends Component {
  constructor(props){
    super(props)
    this.state ={
      data:[],
      username:'',
      password:''
    };
   
  }
  
  render() {
    return (
      <div className='card border-0 p-0 rounded-0 m-0 container-fluid  w-100 testIndexPage'>
        
            <Outlet onfetchdata={this.fetchdata}></Outlet>
        
        <TestFooter />
      </div>
    )
  }
}
