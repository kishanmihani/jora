import axios from 'axios';
import React, { useEffect, useState ,useContext, useReducer} from 'react'
import { ChannelContext, UserContext } from '../../App';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import ParenrComponent from './ParentComponent/ParenrComponent';
import UserForm from './ParentComponent/UserForm';
const initialState={
  firstCounter:0,
  secondCounter:10,
};
const reducer= (state , action) =>{
  switch(action.type){
    case 'increment':
      return {...state,firstCounter:state.firstCounter + action.value};
    case 'decrement':
      return {...state,firstCounter:state.firstCounter - action.value};
    case 'increment2':
      return {...state,secondCounter:state.secondCounter + action.value};
    case 'decrement2':
      return {...state,secondCounter:state.secondCounter - action.value};
    case 'reset':
      return initialState;
    default :
      return state
  }
}
function HooksCounterOne() {
    const [count,setCount]=useState(0);
    const [x,setx]=useState(0);
    const [y,sety]=useState(0);
    const [post,setpost]=useState(0);
    
    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
    const [counts,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <p>{count}</p>
      <button className='btn btn-primary' onClick={()=>setCount(count + 1)}>Increase Count</button>
      {/* <UserContext.consumer>
         {
          user =>{
            return <div>{user}</div>
          }
         }
      </UserContext.consumer> */}
      <h1>
                      <UserContext.Consumer>
                        {
                          user=>{
                            return (
                              <ChannelContext.Consumer>
                                { ChannelContext =>{
                            return ( <div>User context value {user},{ChannelContext}</div>)
                            }
                                }
                              </ChannelContext.Consumer>
                            )
                          }
                        }
                      </UserContext.Consumer>
                      <h1> {user} - {channel}</h1>
                    </h1>
                    <p>Use Reducer count first {counts.firstCounter}</p>
                    <p>Use Reducer count second {counts.secondCounter}</p>
                    <button onClick={()=>dispatch({type:'increment',value:1})}>Increment value  1  </button>
                    <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement value  1  </button>
                    <button onClick={()=>dispatch({type:'increment',value:5})}>Increment value  5  </button>
                    <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement value  5  </button>
                    <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment counter 2  </button>
                    <button onClick={()=>dispatch({type:'decrement2',value:1})}>Decrement counter 2  </button>
                    <button onClick={()=>dispatch({type:'reset'})}>Reset</button>


                    <div className='form-group'> 
                        <ClickCounter name='kishan1 '></ClickCounter>
                        <HoverCounter name='Kishan2 '></HoverCounter>
                    </div>
                    {/* <ParenrComponent /> */}
                    <UserForm />
    </div>
  )
}

export default HooksCounterOne