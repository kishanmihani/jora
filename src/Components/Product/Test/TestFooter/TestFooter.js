import React, { PureComponent } from 'react'
import '../TestIndex.css'
import { IoLogoInstagram } from 'react-icons/io'
import { RiFacebookLine, RiYoutubeLine } from 'react-icons/ri'
import { RxTwitterLogo } from 'react-icons/rx'
import { AiTwotoneCopyright } from 'react-icons/ai'
import facebooksrc from '../../../../Assests/Images/facebook.svg'
import instagramsrc from '../../../../Assests/Images/instagram.svg'
import twittersrc from '../../../../Assests/Images/twitter.svg'
import youtubesrc from '../../../../Assests/Images/youtube.svg'
import twitchsrc from '../../../../Assests/Images/twitch.svg'
class TestFooter extends PureComponent {
 constructor(props){
  super(props)
   this.state={
    madiaimg:[facebooksrc,instagramsrc,twittersrc,twitchsrc,youtubesrc]
   }
 }
  render() {
    return (
      
     <React.Fragment>
        <div className='card-footer p-0 border-0 rounded-0 border-0 blackcolor w-100'>
           <div className='card border-0 blackcolor text-white p-3 pb-0 rounded-5 w-100 align-items-center d-flex'>
            <div id='footerbody' className='card-body p-5  pb-0 w-100 fw-bolder fs-6'>
              <div className='row w-100  leftaligndiv'>
              <p className='text-left d-flex mb-5'>
                {this.state.madiaimg.map((madia,i) =>{
                 return (<img src={madia} data-id='i' id='medialogo' className=' me-5'></img>)
                })}
                
                </p>
              {/* <RiYoutubeLine className='d-flex fs-4 fw-bold m-2 mt-0 mb-0' /> */}
              </div>
              <div className='row col-12  leftaligndiv'>
               <div className='col-lg-3 col-md-6  col-sm-6 col-6'>Privacy Policy</div>
               <div className='col-lg-3 col-md-6  col-sm-6 col-6'>Contact Us</div>
               <div className='col-lg-3 col-md-6  col-sm-6 col-6'>Cookie preferences</div>
               <div className='col-lg-3 col-md-6  col-sm-6 col-6'>Corporate Information</div>              
              </div>
              <div className='row col-12  mt-1 leftaligndiv'>
               <div className='col-lg-3 col-md-6  col-sm-6  col-6'>Privacy Policy</div>
               <div className='col-lg-3 col-md-6  col-sm-6  col-6'>Contact Us</div>
               <div className='col-lg-3 col-md-6  col-sm-6  col-6'>Cookie preferences</div>
               <div className='col-lg-3 col-md-6  col-sm-6  col-6'>Corporate Information</div>              
              </div>
              <div className='row col-md-12 mt-5 leftaligndiv'>
                <div >
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