import React, { useReducer } from 'react'

const initialState=0;
const reducer= (state,action) =>{
    switch(action){
        case 'Increment':
        return  state + 1;
        case 'Decrement':
        return  state - 1;
        case 'Reset':
        return initialState
        default:
        return state;  
    }
}
export default function CounterThree() {

    const [count  , dispatch] = useReducer(reducer,initialState)
    const [countTwo  , dispatchTwo] = useReducer(reducer,initialState)
  return (
    <div className='card h-100  w-100'>
        <div className='card-body'>
            <input type='number' value={count} disabled={'true'}></input>
            <div className='form-group'>
            <button className='btn btn-dark  m-1' onClick={()=>dispatch('Increment')}>Increment</button>
            <button className='btn btn-success m-1' onClick={()=>dispatch('Decrement')}>Decrement</button>
            <button className='btn btn-danger m-1' onClick={()=>dispatch('Reset')}>Reset</button>
            </div>

            <input type='number' value={countTwo} disabled={'true'}></input>
            <div className='form-group'>
            <button className='btn btn-dark  m-1' onClick={()=>dispatchTwo('Increment')}>Increment</button>
            <button className='btn btn-success m-1' onClick={()=>dispatchTwo('Decrement')}>Decrement</button>
            <button className='btn btn-danger m-1' onClick={()=>dispatchTwo('Reset')}>Reset</button>
            </div>
        </div>
    </div>
  )
}
