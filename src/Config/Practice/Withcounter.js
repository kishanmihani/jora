import React from 'react';

const Withcounter = (WrappedComponent, IncrementNumber) =>{
    class Withcounter extends React.PureComponent{
         constructor(props){
           super(props);
           this.state ={
            count:0
           }
         }

         incrementCount = ()=>{
            this.setState(prevState =>{
                return {count:prevState.count + IncrementNumber}
            })
         }

        render(){
            return <WrappedComponent {...this.props} count={this.state.count} incrementCount={this.incrementCount}></WrappedComponent>
        }
    }
    return Withcounter
}
export default Withcounter