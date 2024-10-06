import React, { Component, PureComponent } from 'react';
import Withcounter from './Withcounter'

class HoverCounter extends PureComponent {
   render() {
    const {count, incrementCount,name}= this.props
    return (
      <div>
        <button onMouseOver={incrementCount} className='btn btn-success'>{name}Clicked {count} times</button>
      </div>
    )
  }
}

export default Withcounter(HoverCounter, 10)
