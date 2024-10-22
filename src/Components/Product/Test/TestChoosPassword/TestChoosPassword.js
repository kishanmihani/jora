import React, {  PureComponent } from 'react'
import testLogo from '../../../../Assests/Images/Logo.svg'
 class TestChoosPassword extends PureComponent {
  render() {
    return (
        <React.Fragment>
        <div className='card border-0  p-3 rounded-5 w-100 align-items-center d-flex'>
             <div className='card-body d-flex flex-wrap p-5 col-12'>
               <div className='d-flex flex-column col-lg-5 col-md-12 col-sm-12'>
                <img src={testLogo} alt='testLogo' className='testlogo'/>
                <div className='leftaligndiv mt-5'>
                  <p className='fs-5 fw-normal mb-0'>STEP 1</p>
                  <p className='fs-3 fw-bolder mb-0'>Enter your email address to continue
                  </p>
                  <p className='fs-5 fw-normal mb-0'>Log in to your account. If you don’t have one, you will be prompted to create one.
                  </p>
                </div>
               </div>
               <div className='col-sm-12 col-md-12 col-lg-7 d-flex flex-column align-items-center m-auto'>
                <form className='d-flex flex-column w-100 p-2 mt-5'>
                  <input placeholder='Email' className='border border-secondary mt-5 rounded-0 form-control fs-5 fw-normal p-2'/>
                  <button className='btn btn-dark fs-5 mt-2 testcontinue ms-auto'>Continue</button>
                </form>
               </div>
             </div>
            </div>
      </React.Fragment>
    )
  }
}

export default React.memo(TestChoosPassword)
