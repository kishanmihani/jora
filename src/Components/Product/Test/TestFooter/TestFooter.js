import React, { PureComponent } from 'react'

import { IoLogoInstagram } from 'react-icons/io'
import { RiFacebookLine, RiYoutubeLine } from 'react-icons/ri'
import { RxTwitterLogo } from 'react-icons/rx'
import { AiTwotoneCopyright } from 'react-icons/ai'
class TestFooter extends PureComponent {

  render() {
    return (
      
     <React.Fragment>
        <div className='card-footer p-0 border-0 rounded-0 border-0 bg-dark w-100'>
           <div className='card border-0 bg-dark text-white p-3 pb-0 rounded-5 w-100 align-items-center d-flex'>
            <div className='card-body p-5 pb-0 w-100'>
              <div className='row w-100  leftaligndiv'>
              <p className='text-left d-flex'><RiFacebookLine  className='d-flex fs-4 fw-bold m-2 mt-0 mb-0' />
              <IoLogoInstagram className='d-flex fs-4 fw-bold m-2 mt-0 mb-0'/>
              <RxTwitterLogo className='d-flex fs-4 fw-bold m-2 mt-0 mb-0' />
              <RiYoutubeLine className='d-flex fs-4 fw-bold m-2 mt-0 mb-0' /></p>
              </div>
              <div className='row col-12  leftaligndiv'>
               <div className='col-md-3 col-sm-6'>Privacy Policy</div>
               <div className='col-md-3 col-sm-6'>Contact Us</div>
               <div className='col-md-3 col-sm-6'>Cookie preferences</div>
               <div className='col-md-3 col-sm-6'>Corporate Information</div>              
              </div>
              <div className='row col-12  mt-1 leftaligndiv'>
               <div className='col-md-3 col-sm-6'>Privacy Policy</div>
               <div className='col-md-3 col-sm-6'>Contact Us</div>
               <div className='col-md-3 col-sm-6'>Cookie preferences</div>
               <div className='col-md-3 col-sm-6'>Corporate Information</div>              
              </div>
              <div className='row col-md-12 mt-4 ms-2 leftaligndiv'>
                <div className='col-md-3'>
                  <p><AiTwotoneCopyright /> Alkye Test</p>
                </div>
              </div>
            </div>
           </div>
        </div>
        </React.Fragment>
    )
  }
}

export default React.memo(TestFooter)