import React,{ useEffect} from 'react';
import './Dashboard.css';
import { CgSearch } from "react-icons/cg";
import { FaHandsClapping } from "react-icons/fa6";
import { RxHamburgerMenu} from "react-icons/rx";
import { Outlet, useNavigate } from "react-router-dom";
import Sidbar from './Sidbar/Sidbar';
import ErrorBoundary from '../ErrorBoundary';

function Dasboard(){
  const navigate = useNavigate();

  const UserInfo=[
    {"userName":localStorage.getItem('Username'),"userImg":localStorage.getItem('UserImg')}
  ]
  const CheckUserInfo=UserInfo[0].userImg === null && UserInfo[0].userName === null ;
  useEffect(() => {
   if(CheckUserInfo){
    navigate('/') 
   }
  })
  

	return (
      <ErrorBoundary>
        
	        <div id="page-Container">

	             <div id="left-container">
                  <Sidbar message={UserInfo}></Sidbar>
              </div>
              {/* <Routes>
        <Route path="/dashboard/UserInfo" element={<UserInfo message='2' />} />

        </Routes> */}
        
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
                  
                  <section>
                  <Outlet></Outlet>
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
