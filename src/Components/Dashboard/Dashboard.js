import React,{lazy, useEffect} from 'react';
import './Dashboard.css';
import { CgSearch } from "react-icons/cg";
import { FaHandsClapping,FaChevronRight } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa"
import { MdOutlineAccountBalanceWallet,MdOutlineLiveHelp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LiaProductHunt } from "react-icons/lia"
import { GrMoney } from "react-icons/gr";
import { RxHamburgerMenu} from "react-icons/rx";
import { RiCodepenFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { TbSettings2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import ResponsivePie from './Dashboardgraph/ResponsivePie';
import MonthlyearnBarChart from './MonthlyearnBarChart/MonthlyearnBarChart';
import Sidbar from './Sidbar/Sidbar';
import ErrorBoundary from '../ErrorBoundary';

function Dasboard(){
  const navigate = useNavigate();
  const cardItimes=[
    {"heading":"Earning","persentag":37.8,"rate":"$198k"},
    {"heading":"Order","persentag":-2,"rate":"$2.4k"},
    {"heading":"Balance","persentag":-2,"rate":"$2.4k"},
    {"heading":"Total Sales","persentag":38,"rate":"89k"}
  ]

  const UserInfo=[
    {"userName":localStorage.getItem('Username'),"userImg":localStorage.getItem('UserImg')}
  ]
  console.log(UserInfo[0].userImg , UserInfo[0].userName)
  const CheckUserInfo=UserInfo[0].userImg === null && UserInfo[0].userName === null ;
  useEffect(() => {
   if(CheckUserInfo){
    navigate('/') 
   }
  },[navigate])
  

	return (
      <ErrorBoundary>
	        <div id="page-Container">

	             <div id="left-container">
                  <Sidbar message={UserInfo}></Sidbar>
                </div>
	             <div id="right-container" className='overflow-auto'>
                  <header id="first-header">  
                   <div id="profile-name">
                   <button onClick={()=> document.getElementById('left-container').style='display:block'} id="menu-button"><RxHamburgerMenu /></button>
                   <h3 className='mb-0'> Hello {UserInfo[0].userName} <span id="handicon"><FaHandsClapping /></span></h3>
                   </div>

                   <div id="input-container">
                   <span id="search-icon"><CgSearch /></span>
                   <input type='text' id="input-search" placeholder='search'/> 
                   </div>
                  </header>
                  {/*All card*/}
                  <section id="card-container-only" >
                  {/* first card*/}
                  {cardItimes.map((item, index) => (
                  <div id="card">
                    <div id="card-image-container">
                    <div id="card-image"  className={`${
                      item.heading ==='Earning' ?'card-image-zero'
                      :item.heading ==='Order'?'card-image-first'
                      :item.heading ==='Balance'? 'card-image-Second'
                      :'card-image-third'
                   }`}>
                  
                  {
                   item.heading ==='Earning' ?< AiOutlineDollar />
                  :item.heading ==='Order'?<MdOutlineSpeakerNotes  />
                  :item.heading ==='Balance'? <MdOutlineAccountBalanceWallet />
                  :< BsHandbag />
                   }
                    </div>
                    </div>
                    <div id="card-text">
                    <p id="card-first-heading" className="mb-0 fs-sm">{item.heading}</p>
                     <h3 id="card-first-rate">{item.rate}</h3>
                     <p id="card-first-text" className=" mb-0 fs-sm"><span className={ item.persentag >=0 ?"profit" :"lose"}>{ item.persentag >=0 ?<FaArrowUp /> :<FaArrowDown />}{item.persentag}</span> <span>this month</span></p>
                    
                   </div>
                   </div>
                    ))}
                  </section>

                    {/*graph section*/}

                    <section id="graph">
                    <MonthlyearnBarChart></MonthlyearnBarChart>
                    
                    <ResponsivePie></ResponsivePie>
                    </section>
                   {/*last table*/}

                  {/* <section id="product-table-list">
                   <div id="product-first-header">
                     <div id="product-text-heading">
                     <h3>Product Sell</h3>
                     </div>

                     <div id="input-select-container" >
                      <div id="input-container-product"  className='input-cntainer-table'>
                   <span id="search-icon-product"><CgSearch /></span>
                   <input type='text' id="input-search-product" placeholder='search'/> 
                   </div>

                   <div>
                    <select id="select-record">
                       <option>Last 30day</option>
                    </select>
                   </div>
                     </div>
                   </div>

                   <div id='product-table-div'>
                    <table id='product-table'>
                     <thead>
                             <tr>
                              <th id="first-thead">Product Name</th>
                              <th>Stock</th>
                              <th>Price</th>
                              <th>Total Sales</th>
                             </tr>
                     </thead>

                     <tbody>
                             <tr>
                              <td>
                              <div id="contins-small">
                              <div id="imgbox"><img className=" imgprofile"   id='imgbox-img' /></div>
                              <div id="textbox">
                              <p id="bold" className='mb-0'>Abstract</p>
                              <p className='mb-0'>lorem one tow three</p>
                              </div>
                              </div>
                              </td>
                              <td>32 in Stock</td>
                              <td>$45.99</td>
                              <td>20</td>
                             </tr>
                             <tr>
                              <td><div id="contins-small">
                              <div id="imgbox"><img className=' imgprofile'   id='imgbox-img' /></div>
                              <div id="textbox">
                              <p id="bold" className='mb-0'>Abstract</p>
                              <p className='mb-0'>lorem one tow three
                              </p>
                              </div>
                              </div></td>
                              <td>32 in Stock</td>
                              <td>$45.99</td>
                              <td>20</td>
                             </tr>
                     </tbody>
                    </table>
                   </div>
                  </section> */}
	             </div>
	        </div>
        </ErrorBoundary>
	       ) 

}

export default Dasboard;
