import React, {  PureComponent } from 'react'
import TestFooter from '../Test/TestFooter/TestFooter'

 class TestDashboard extends PureComponent {
  render() {
    return (
      <div>
        <TestFooter />
      </div>
    )
  }
}
export default React.memo(TestDashboard)