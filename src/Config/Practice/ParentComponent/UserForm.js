import React, { useState } from 'react'
import UserInput from './UserInput'

export default function UserForm() {
    const [firstName,bindFirstName,resetFirstName,]=UserInput('')
    const [lastName,bindLastName,resetLastName,]=UserInput('')

    const submithandler = e =>{
        e.preventDefault()
        alert(`hi, I am ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName()
    }
  return (
    <div>
        <div>
            <form onSubmit={submithandler}>
                <div className='form-group'>
                    <label className='form-control-label'>First Name</label>
                    <input className='form-control' {...bindFirstName} type='text'/>
                </div>
                <div>
                    <label className='form-control-label'>last Name</label>
                    <input className='form-control' {...bindLastName} type='text'/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}
