
import React, { Component } from 'react'
import pagenotfound from '../../Assests/Images/404img.jpg'

export default class PageNotfound extends Component {
 
    // constructor(){

    // }
  render() {
    return (
        <div className='h-100 w-100'>
        <img src={pagenotfound} className='h-100 ' alt='pagenotfound'></img>
        </div>
      
    )
  }
}
