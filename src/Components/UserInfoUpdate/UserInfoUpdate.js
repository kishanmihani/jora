import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class UserInfoUpdate extends Component {
//   static propTypes = {second: third}

componentWillUnmount(){
    console.log('component will unmount')
}
  render() {
    return (
      <div>UserInfoUpdate</div>
    )
  }
}
