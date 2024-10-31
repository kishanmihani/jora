import React, { Component } from 'react'

export default class Addrecords extends Component {
    constructor(props){
        super(props);
        this.state={
            Fullname:'',
            email:'',
        }
        console.log(props)
        this.usernameclick=this.usernameclick.bind(this);
        this.emailclick=this.emailclick.bind(this);
        this.Formsave=this.Formsave.bind(this)
        // console.log(this.props.onReceiveData('hi'))
        // this.props.onReceiveData=this.props.onReceiveData.bind(this)
    }

    usernameclick(e){
        this.setState((prevState)=>({
            Fullname:e.target.value
        }))
    }
    emailclick(e){
        this.setState((prevState)=>({
            email:e.target.value
        }))
    }
    Formsave(e){
        e.preventDefault()
        const info={
            name:this.state.Fullname,
            email:this.state.email,
        }
        this.props.onReceiveData(info);
        this.setState((prevState)=>({
            Fullname:'',
            email:''
        }))
    }
  render() {

    return (
      <div className='card w-100 h-100 text-start border-0'>
      <div className='card-body'>
        <form onSubmit={this.Formsave}>
            <div>
                <p className='mb-0'><small>User Name</small></p>
                <input type='text' onChange={this.usernameclick} value={this.state.Fullname} className='form-control' name='Fullname'></input>
            </div>
            <div>
                <p className='mb-0'><small>Email</small></p>
                <input type='text' onChange={this.emailclick} value={this.state.email} className='form-control' name='email'></input>
            </div>
            <div>
            <button className='btn btn-primary mt-2 fw-normal' type='submit'>Add</button>
            </div>
        </form>
      </div>
      </div>
    )
  }
}
