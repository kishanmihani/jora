
import React, { Component } from 'react'
import { CgSearch } from "react-icons/cg";
import { RiCodepenFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { TbSettings2 } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import {MdOutlineLiveHelp } from "react-icons/md";
import { LiaProductHunt } from "react-icons/lia"
import { GrMoney } from "react-icons/gr";
import {FaChevronRight } from "react-icons/fa6";
export default class Sidbar extends Component {
  

  constructor(props){
    super(props)
    this.state={
        userInfo:props.message
    }
    console.log(this.state.userInfo[0].userName)
  }
  render() {
    return (
      <div>
        <div id="Dashboardheading">
                    <button onClick={()=> document.getElementById('left-container').style='display:none'} id="cross-button"><MdCancel /></button>
                      <h4><span id="dasboard-icon"><TbSettings2 /></span> <span>Dashboard</span></h4>
                    </div>
                    <div id="menu-list">
                         <ul className='px-0'>
                             <li id='list-menu-one'className="list-menu m-auto"><div className="p-1 pl-0"><p className="list-menu-text mb-0"><span className="list-menu-first"><CgSearch /></span>Dashboard<span id="list-menu-last" style={{display:'none'}}><FaChevronRight /></span></p></div></li>
                             <li className="list-menu m-auto"><div><p className="list-menu-text mb-0"><span className="list-menu-first"><LiaProductHunt /></span>Product<span id="list-menu-last"><FaChevronRight /></span></p></div></li>
                             <li className="list-menu m-auto"><div><p className="list-menu-text mb-0"><span className="list-menu-first"><CgProfile  /></span>Customers<span id="list-menu-last"><FaChevronRight /></span></p></div></li>
                             <li className="list-menu m-auto"><div><p className="list-menu-text mb-0"><span className="list-menu-first"><GrMoney /></span>Income<span id="list-menu-last"><FaChevronRight /></span></p></div></li>
                             <li className="list-menu m-auto"><div><p className="list-menu-text mb-0"><span className="list-menu-first"><RiCodepenFill /></span>Promote<span  id="list-menu-last"><FaChevronRight /></span></p></div></li>
                             <li className="list-menu m-auto"><div><p className="list-menu-text mb-0"><span className="list-menu-first"><MdOutlineLiveHelp /></span>Help<span id="list-menu-last"><FaChevronRight /></span></p></div></li>
                         </ul>
                    </div>
                    <div className='position-relative'>
                    <div id="profile-conteiner-box">
                      <div id="profile-logo-contianer">
                     <img src={`${this.state.userInfo[0].userImg}`} alt="profileimg" id="profile-logo-image"/>
                      </div>
                      <div id="profile-container-text">
                         <h4 className='mb-0'>{this.state.userInfo[0].userName} </h4>
                         <p className='mb-0'>Product Manager</p>

                      </div>
                      <span id="downicon"><FaChevronDown /></span>
                    </div>
                    <div className="show dropdown-menu dropdown-menu-right position-absolute top-0 dropdown-profile">
                    <button className="dropdown-item border-bottom" type="button">Action</button>
                    <button className="dropdown-item border-bottom" type="button">Another action</button>
                    <button className="dropdown-item border-bottom" type="button">Something else here</button>
                  </div>
                  </div>
      </div>
    )
  }
}
