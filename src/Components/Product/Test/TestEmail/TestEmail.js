
import React, {  PureComponent } from 'react'
import testLogo from '../../../../Assests/Images/Logo.svg'
import { withRouter } from '../../../Dashboard/withRouter';
import { Outlet, useNavigate } from "react-router-dom";
class TestEmail extends PureComponent {
  constructor(props){
    super(props)
    this.onFormsubmit=this.onFormsubmit.bind(this)
    this.state={
      username:''
    }
  }
  onFormsubmit(e){
    // const navigate = useNavigate();
    const   {username}=this.state;
    e.preventDefault()
    console.log('emal->',username)
    if(username !=='' ){
      this.props.navigate('/TestIndex/TestPassword')
    }
    
  }
  render() {
    return (
      <React.Fragment>
        <div className='card border-0  p-3 rounded-5 w-100 align-items-center d-flex'>
             <div className='card-body d-flex flex-wrap p-5 col-12'>
               <div className='col-12 d-flex flex-column col-lg-5 col-md-6 col-sm-12'>
                <img src={testLogo} alt='testLogo' className='testlogo'/>
                <div className='leftaligndiv mt-5'>
                  <p className='fs-6 fw-bolder text-secondary mb-0'>STEP 1</p>
                  <p className='fs-3 fw-bolder mb-2'>Enter your email<br  className='testbreak'></br> address to continue
                  </p>
                  <p className='fs-6 fw-normal mb-0'>Log in to your account. If you don’t have <br className='testbreak'></br>one, you will be prompted to create one.
                  </p>
                </div>
               </div>
               <div className='col-12 col-sm-12 col-md-6 col-lg-7 d-flex flex-column align-items-center pt-4'>
                <form onSubmit={this.onFormsubmit} id='formtest' className='d-flex flex-column w-100 pt-5 mt-5'>
                  <input placeholder='Email' id='testEmailinput' className='border border-secondary  w-75 ms-auto form-control fs-6 fw-bolder p-3 'value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} type='text'/>
                  
                  <div id='testbuttons' className='d-flex justify-content-between align-content-center mt-2  ms-auto w-75'>
                    <p className='mt-4'><small className=' border-bottom text-dark '>Have an account?</small> </p>
                    <button type='submit' className='btn btn-dark blackcolor fs-5 mt-2 testcontinue ms-auto'  >Continue</button></div>
                </form>
               </div>
             </div>
            </div>
      </React.Fragment>
    )
  }
}

export default React.memo(withRouter(TestEmail))