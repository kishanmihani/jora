import React, { Component, PureComponent } from 'react';
import Withcounter from './Withcounter'

class ClickCounter extends PureComponent {
  render() {
    const {count, incrementCount,name}= this.props
    return (
      <div>
        <button onClick={incrementCount} className='btn btn-dark'>{name}Clicked {count} times</button>
      </div>
    )
  }
}

export default Withcounter(ClickCounter, 5)
