import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import './ProductList.css'
import { BiDollar } from "react-icons/bi";
import { MdOutlineStar } from "react-icons/md";
import { Rating } from '@mui/material';
import Loadericon from '../Dashboard/Loadericon/Loadericon';
import { productListdata } from './ProductListdata';
import { productlistapi,staticlocal } from '../../Config/endpoint';
import { useSelector , useDispatch} from 'react-redux';
import { setProduct } from '../../redux/actions/productActions';
const initialState ={
  loading:true,
  error:'',
  post:{}
}

const reducer = (state,action) =>{
  switch(action.type){
      case 'FETCH_SUCCESS':
          return {
              loading:false,
              post:action.payload,
              error:''
          }
      case 'FETCH_ERROR':
          return {
              loading:false,
              post:{},
              error:'Something went wrong!'
          }
      default :
        return state
  }
}
export default function ProductList() {
   const productss = useSelector((states)=> states.allProducts.product  )
  const [state,dispatch]= useReducer(reducer, initialState);
  // const [datafeched,setdatafeched]
  const dispatchProduct = useDispatch()
  useEffect(()=>{
    if(state.loading){
    tabledata()
    }else{
      
    }
    

  },[state])
    
  function tabledata(){
    axios
    .get(productlistapi)
    .then(response =>{
        dispatch({type:'FETCH_SUCCESS',payload:response.data})
    })
    .catch(error =>{
      // staticlocal ? dispatch({type:'FETCH_SUCCESS',payload: productListdata}) : dispatch({type:'FETCH_ERROR'})
      dispatchProduct(setProduct(productListdata))
    })
  }
    return (
      <div className='card container-fluids border-0 h-100 overflow-auto ' id='productlist'>
        <div className='card-body h-100 w-100 col-12 flex-wrap d-flex'>
        {/* <div  key={id}><p>category : {category} , title : {title}</p></div> */}
        {/* {productlists} */}
        {productss.map((product)=>{
    const {id,title,thumbnail,price,description,rating} = product;
    return (
      <div key={id} className=' col-xs-12 col-sm-12 col-md-6 col-xl-4 col-xxl-3 p-2 box-height'  >
      <div className='d-flex rounded m-1 p-2' id='productContainer'>
      <div className='d-flex justify-content-center align-items-center'><img src={thumbnail} alt={id} className='productImage' /></div>
      <div>
        <div className='text-start form-label '>
          <p className='fs-6 mb-0 fw-bolder' id='producttitle'>{title}</p>
        <p className='fs-6 mb-0'id='productdecription'><span className='fw-normal '>Description :</span> <small className='text-muted fw-lighter'>{description}</small></p>
        <p className='fs-6 mb-0 '><span className='fw-normal '>Price &nbsp;: </span><span className=' text-success fw-normal'><BiDollar className='fs-6 icon-alignment'  />{price}</span></p>
         <p className='fs-6 mb-0'><span className='fw-normal '>Rating : </span><span className='fw-normal'><Rating className='fs-6 bg-white icon-alignment' value={rating} readOnly></Rating></span></p>
         </div>
        </div>
        </div>
       </div>
    )
  }) }

        {/* {state.error ? state.error : ''}
        {state.loading ?  <Loadericon />:
        (state.post.products).map((item,index)=>{
       return   <div key={index} className=' col-xs-12 col-sm-12 col-md-6 col-xl-4 col-xxl-3 p-2 box-height'  >
                <div className='d-flex rounded m-1 p-2' id='productContainer'>
                <div className='d-flex justify-content-center align-items-center'><img src={item.thumbnail} alt={item.id} className='productImage' /></div>
                <div>
                  <div className='text-start form-label '>
                    <p className='fs-6 mb-0 fw-bolder' id='producttitle'>{item.title}</p>
                  <p className='fs-6 mb-0'id='productdecription'><span className='fw-normal '>Description :</span> <small className='text-muted fw-lighter'>{item.description}</small></p>
                  <p className='fs-6 mb-0 '><span className='fw-normal '>Price &nbsp;: </span><span className=' text-success fw-normal'><BiDollar className='fs-6 icon-alignment'  />{item.price}</span></p>
                   <p className='fs-6 mb-0'><span className='fw-normal '>Rating : </span><span className='fw-normal'><Rating className='fs-6 bg-white icon-alignment' value={item.rating} readOnly></Rating></span></p>
                   </div>
                  </div>
                  </div>
                 </div>
        })
        } */}
            
            <div>

            </div>
        </div>
      </div>
    )
  }

