
import React, {  PureComponent } from 'react'
import testLogo from '../../../../Assests/Images/Logo.svg'
import { withRouter } from '../../../Dashboard/withRouter';
import { Outlet, useNavigate } from "react-router-dom";
import { GlobalContext } from '../../../../globalstore';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
class TestEmail extends PureComponent {
  static contextType = GlobalContext;
  constructor(props){
    super(props)
    this.onFormsubmit=this.onFormsubmit.bind(this)
    this.onFormsubmitPassword=this.onFormsubmitPassword.bind(this)
    this.state={
      username:'',
       password:'',
      firstcomponent:true
    }
  }
  onFormsubmit(e){
    // const navigate = useNavigate();
    const   {username}=this.state;
    e.preventDefault()
    this.setState({firstcomponent:false})
    if(username !=='' ){
      // this.props.navigate('/TestIndex/TestPassword')
    }
    
  }
  onFormsubmitPassword(e){
    // a/lert(1)
    const { state, updateGlobalState } = this.context;
    const  {user } = state;    
    // const { globalValue, setGlobalValue } = this.context;
    e.preventDefault()
    axios
    .post('https://untitled-twkmuar27a-uc.a.run.app/api/login/', {
     "username": this.state.username,
     "password": this.state.password
   })
   .then(function (response)  {
     updateGlobalState("user", { user_id: response.data.user_id,token: response.data.token })
        
     this.props.navigate('/TestIndex/TestDashboard');
   }.bind(this))
   .catch(function (error) {
     console.log(error);
     if(error.code ==='ERR_BAD_REQUEST'){
      toast.warn('Invalid Credentials', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });;
     }
   });
    
  }
  render() {
    
    
    if(this.state.firstcomponent){
    return (
      <React.Fragment>
        <div className='card-body w-100 align-items-center d-flex justify-content-center'>
        <div className='card border-0  p-3 rounded-5 w-100 align-items-center d-flex'>
             <div className='card-body d-flex flex-wrap  col-12'>
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
        </div>
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        <div className='card-body w-100 align-items-center d-flex justify-content-center'>
      <div className='card border-0  p-3 rounded-5 w-100 align-items-center d-flex'>
           <div className='card-body d-flex flex-wrap col-12' id='testPasswordcm'>
             <div className='col-12 d-flex flex-column col-lg-5 col-md-6 col-sm-12'>
              <img src={testLogo} alt='testLogo' className='testlogo'/>
              <div className='leftaligndiv mt-5'>
                <p className='fs-6 fw-bolder text-secondary mb-0'>STEP 2</p>
                <p className='fs-3 fw-bolder mb-2'>Create an account to<br  className='testbreak'></br> continue</p>
                <p className='fs-6 fw-normal mb-0'>You’ll be able to log in to Dingoo with this<br  className='testbreak'></br> email address and password.
                </p>
              </div>
             </div>
             <div className='col-12 col-sm-12 col-md-6 col-lg-7 d-flex flex-column align-items-center pt-4'>
              <form onSubmit={this.onFormsubmitPassword} id='formtest' className='d-flex flex-column w-100 pt-5 mt-5'>
                <p id='testpasswordlabel' className='d-flex justify-content-between align-content-center mt-2  ms-auto fw-bolder w-75 mb-2 text-start'>Enter a password to create your account with</p>
                <input placeholder='Choose a password' id='testEmailinput' className='border border-secondary  w-75 ms-auto form-control fs-6 fw-bolder p-3 'value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} type='text'/>
                
                <div id='testbuttonsPassword' className='col-12 mt-2  ms-auto w-75 d-flex'>
                  <p className='mt-2 text-start col-6 col-sm-6 col-md-8 col-lg-8'><small className='border-bottom'>Use a minimum of 6 characters (case sensitive) with at least one number or special character.</small></p>
                  <button type='submit' className='btn btn-dark blackcolor fs-6 mt-2  testcontinue ms-auto col-6 col-sm-6 col-md-4 col-lg-4' id='passwordbuttontest'  >Agree & Continue</button></div>
              </form>
             </div>
             <div classNmame='col-sm-12'><p className='mt-4 text-start'><small id='passworddowntext' className='text-secondary '>Dingoo will use your data to personalise and improve your Dingoo experience and to send you information about Dingoo. You can change your communication preferences anytime. We may use your data as described in our Privacy Policy, including sharing it with The Test of Companies. By clicking "Agree & Continue", you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.</small> </p></div>
           </div>
          </div>
          </div>
          <ToastContainer 
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" 
        ></ToastContainer>
    </React.Fragment>
    )
  }
  }
}

export default React.memo(withRouter(TestEmail))