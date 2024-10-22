
import React, { PureComponent } from 'react';
import { RiCodepenFill } from "react-icons/ri";
import { TbSettings2 } from "react-icons/tb";
import { CgProfile ,CgSearch } from "react-icons/cg";
import {MdOutlineLiveHelp ,MdCancel} from "react-icons/md";
import { LiaProductHunt } from "react-icons/lia"
import { GrMoney } from "react-icons/gr";
import {FaChevronRight,FaChevronDown } from "react-icons/fa6";
import { withRouter } from '../withRouter';
import logouticon from "../../../Assests/Images/logouticon.png";
import user from "../../../Assests/Images/user.png";
import { Link, NavLink} from 'react-router-dom';
import './Sidbar.css'
class Sidbar extends PureComponent {
  

  constructor(props){
    super(props)
    this.state={
        userInfo:props.message,
        User_Profile:false,
        showdiv:true
    }
    this.ToggleEvent = this.ToggleEvent.bind(this); 
    this.Logout = this.Logout.bind(this);
  }
  ToggleEvent(e){
    const currentState = this.state.User_Profile;
    this.setState({
      User_Profile: !currentState
    });
  }
  Logout(){
    localStorage.clear();
    this.props.navigate('/')
  }
  
  render() {
    return (
      <div>
        <div id="Dashboardheading">
                    <button onClick={()=> document.getElementById('left-container').style='display:none'} id="cross-button"><MdCancel /></button>
                      <h4><span id="dasboard-icon"><TbSettings2 /></span> <span>Dashboard</span></h4>
                    </div>
                    <div>
                    <div id="menu-list">
                         <ul className='px-0'>
                             <li className="list-menu m-auto"><NavLink to='/dashboard' activeClassName="list-menu-highlight" className='text-white  link-offset-2 link-underline-opacity-0 align-middle'><div><p className="list-menu-text mb-0"><span className="list-menu-first"><TbSettings2 /></span>Dashboard<span id="list-menu-last" style={{display:'none'}}><FaChevronRight /></span></p></div></NavLink></li>
                             <li className="list-menu m-auto" ><NavLink to='/dashboard/Productlist' activeClassName="list-menu-highlight" className='text-white  link-offset-2 link-underline-opacity-0 align-middle'><div><p className="list-menu-text mb-0"><span className="list-menu-first"><LiaProductHunt /></span>Product<span id="list-menu-last"><FaChevronRight /></span></p></div></NavLink></li>
                             <li className="list-menu m-auto"><NavLink to='/dashboard/TaskList' activeClassName="list-menu-highlight" className='text-white  link-offset-2 link-underline-opacity-0 align-middle'><div><p className="list-menu-text mb-0"><span className="list-menu-first"><CgProfile  /></span>TaskList<span id="list-menu-last"><FaChevronRight /></span></p></div></NavLink></li>

                             <li className="list-menu m-auto"><div><p className="list-menu-text mb-0"><span className="list-menu-first"><CgProfile  /></span>Customers<span id="list-menu-last"><FaChevronRight /></span></p></div></li>
                             <li className="list-menu m-auto"><div><p className="list-menu-text mb-0"><span className="list-menu-first"><GrMoney /></span>Income<span id="list-menu-last"><FaChevronRight /></span></p></div></li>
                             <li className="list-menu m-auto"><div><p className="list-menu-text mb-0"><span className="list-menu-first"><RiCodepenFill /></span>Promote<span  id="list-menu-last"><FaChevronRight /></span></p></div></li>
                             <li className="list-menu m-auto"><div><p className="list-menu-text mb-0"><span className="list-menu-first"><MdOutlineLiveHelp /></span>Help<span id="list-menu-last"><FaChevronRight /></span></p></div></li>
                             <li className="list-menu m-auto" ><NavLink to='/TestIndex' activeClassName="list-menu-highlight" className='text-white  link-offset-2 link-underline-opacity-0 align-middle'><div><p className="list-menu-text mb-0"><span className="list-menu-first"><LiaProductHunt /></span>TestIndex<span id="list-menu-last"><FaChevronRight /></span></p></div></NavLink></li>
                         </ul>
                    </div>
                    <div className='position-relative'>
                    <div id="profile-conteiner-box" onClick={this.ToggleEvent}>
                      <div id="profile-logo-contianer" >
                     <img src={`${this.state.userInfo[0].userImg}`} alt="profileimg" id="profile-logo-image"/>
                      </div>
                      <div id="profile-container-text">
                         <h4 className='mb-0'>{this.state.userInfo[0].userName} </h4>
                         <p className='mb-0'>Product Manager</p>

                      </div>
                      <span id="downicon"><FaChevronDown /></span>
                    </div>
                    <div className={` ${this.state.User_Profile ? 'show':''} dropdown-menu dropdown-menu-right position-absolute top-0 dropdown-profile`}>
                    <button className="dropdown-item " type="button" ><img src={user} alt='logouticon' className='iconheight' /><Link to='/dashboard/HooksCounterOne'  className='link-secondary link-offset-2 link-underline-opacity-0 align-middle'> HooksCounterOne</Link></button>
                    <button className="dropdown-item " type="button" ><img src={user} alt='logouticon' className='iconheight' /><Link to='/dashboard/UserInfo'  className='link-secondary link-offset-2 link-underline-opacity-0 align-middle'> User Info</Link></button>
                    <button className="dropdown-item" type="button" onClick={this.Logout}><img src={logouticon} alt='logouticon' className='iconheight' />&nbsp;<span className='link-secondary link-offset-2 link-underline-opacity-0 '>Logout</span></button>
                  </div>
                  </div>
              </div>
      </div>
    )
  }
}
export default React.memo(withRouter(Sidbar))