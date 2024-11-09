import React, { Component } from 'react'
import  './TestIndex.css'
import { Outlet } from 'react-router-dom'
import TestFooter from './TestFooter/TestFooter'
export default class TestIndex extends Component {
  // constructor(){
  // }
  render() {
    return (
      <div className='card border-0 p-0 rounded-0 m-0 container-fluid  w-100 testIndexPage'>
        <div className='card-body w-100 align-items-center d-flex justify-content-center'>
            <Outlet ></Outlet>
        </div>
        <TestFooter />
      </div>
    )
  }
}
