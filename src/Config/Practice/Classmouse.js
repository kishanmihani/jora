import React, { Component } from 'react'

export default class Classmouse extends Component {
    constructor(props){
      super(props);
      this.state={
        x:0,
        y:0
      }
    }

    logmousePosition=e=>{
        this.setState({x:e.clientX,y:e.clientY,});
    }
    componentDidMount(){
       window.addEventListener('mousemove',this.logmousePosition)
    }
  render() {
    return (
      <div>
               {this.state.x} + {this.state.y}
      </div>
    )
  }
}
