import axios from 'axios'
import React, { useEffect, useState,useCallback} from 'react'
import './ProductList.css'
import { BiDollar } from "react-icons/bi";
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { productlistapi} from '../../Config/endpoint';
import { useSelector , useDispatch} from 'react-redux';
import { setProduct } from '../../redux/actions/productActions';

export default function ProductList() {
  const productss = useSelector((states)=> states.allProducts.product  )
  const dispatchProduct = useDispatch()
  const [datavalue,setdatavalue]=useState(true)
    
  const  tabledata =useCallback(()=>{
    axios
    .get(productlistapi)
    .then(response =>{
        dispatchProduct(setProduct(response.data.products))
        setdatavalue(false)
    })
    .catch(error =>{
      console.error(error)
    })
  },[dispatchProduct])

    useEffect(()=>{
    if(datavalue){
   tabledata() 
    }
  },[datavalue,tabledata])
    return (
      <div className='card container-fluids border-0 h-100 overflow-auto ' id='productlist'>
        <Link to='/dashboard/ProductCaegories'>a</Link>
        <div className='card-body h-100 w-100 col-12 flex-wrap d-flex'>
         {productss.map((product)=>{
            const {id,title,thumbnail,price,description,rating} = product;
            return (
              <div key={id} className=' col-xs-12 col-sm-12 col-md-6 col-xl-4 col-xxl-3 p-2 box-height'  >
                <Link to={`/dashboard/Productlist/${id}`} className=' text-decoration-none' >  
              <div className='d-flex rounded m-1 p-2' id='productContainer'>
              <div className='d-flex justify-content-center align-items-center'><img src={thumbnail} alt={id} className='productImage' loading="lazy"/></div>
              <div>
                <div className='text-start form-label '>
                  <p className='fs-6 mb-0 fw-bolder' id='producttitle'>{title}</p>
                <p className='fs-6 mb-0'id='productdecription'><span className='fw-normal '>Description :</span> <small className='text-muted fw-lighter'>{description}</small></p>
                <p className='fs-6 mb-0 '><span className='fw-normal '>Price &nbsp;: </span><span className=' text-success fw-normal'><BiDollar className='fs-6 icon-alignment'  />{price}</span></p>
                  <p className='fs-6 mb-0'><span className='fw-normal '>Rating : </span><span className='fw-normal'><Rating className='fs-6 bg-white icon-alignment' value={rating} readOnly></Rating></span></p>
                  </div>
                </div>
                </div>
                </Link>
                </div>
            )
            }) }
           <div>
          </div>
        </div>
      </div>
    )
  }

