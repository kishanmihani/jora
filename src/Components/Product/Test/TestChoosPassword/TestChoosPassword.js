import React, {  PureComponent } from 'react'
import { withRouter } from '../../../Dashboard/withRouter';
import '../TestIndex.css'
import testLogo from '../../../../Assests/Images/Logo.svg'
 class TestChoosPassword extends PureComponent {
  constructor(props){
    super(props)
    this.onFormsubmit=this.onFormsubmit.bind(this)
    this.state={
      password:''
    }
  }
  onFormsubmit(e){
    // const navigate = useNavigate();
    const   {password}=this.state;
    e.preventDefault()
    console.log('emal->',password)
    if(password !=='' ){
      this.props.navigate('/TestIndex/TestDashboard')
    }
    
  }
  render() {
    return (
      <React.Fragment>
      <div className='card border-0  p-3 rounded-5 w-100 align-items-center d-flex'>
           <div className='card-body d-flex flex-wrap p-5 col-12' id='testPasswordcm'>
             <div className='col-12 d-flex flex-column col-lg-5 col-md-6 col-sm-12'>
              <img src={testLogo} alt='testLogo' className='testlogo'/>
              <div className='leftaligndiv mt-5'>
                <p className='fs-6 fw-bolder text-secondary mb-0'>STEP 2</p>
                <p className='fs-3 fw-bolder mb-2'>Create an account to continue</p>
                <p className='fs-6 fw-normal mb-0'>You’ll be able to log in to Dingoo with this email address and password.
                </p>
              </div>
             </div>
             <div className='col-12 col-sm-12 col-md-6 col-lg-7 d-flex flex-column align-items-center pt-4'>
              <form onSubmit={this.onFormsubmit} id='formtest' className='d-flex flex-column w-100 pt-5 mt-5'>
                <p id='testpasswordlabel' className='d-flex justify-content-between align-content-center mt-2  ms-auto fw-normal w-75 mb-2 text-start'>Enter a password to create your account with .
                 </p>
                <input placeholder='Email' id='testEmailinput' className='border border-secondary  w-75 ms-auto form-control fs-6 fw-bolder p-3 'value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} type='text'/>
                
                <div id='testbuttons' className='col-12 mt-2  ms-auto w-75 d-flex'>
                  <p className='mt-3 text-start text-secondary col-6 fs-6 col-sm-6 col-md-8 col-lg-8'>Use a minimum of 6 characters (case sensitive) with at least one number or special character.</p>
                  <button type='submit' className='btn btn-dark blackcolor fs-6 mt-2 fw-bolder testcontinue ms-auto col-6 col-sm-6 col-md-4 col-lg-4'   >Agree & Continue</button></div>
              </form>
             </div>
             <div classNmae='col-sm-12'><p className='mt-4 text-start'><small id='passworddowntext' className='text-secondary '>Dingoo will use your data to personalise and improve your Dingoo experience and to send you information about Dingoo. You can change your communication preferences anytime. We may use your data as described in our Privacy Policy, including sharing it with The Test of Companies. By clicking "Agree & Continue", you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.</small> </p></div>
           </div>
          </div>
    </React.Fragment>
    )
  }
}

export default React.memo(withRouter(TestChoosPassword))
