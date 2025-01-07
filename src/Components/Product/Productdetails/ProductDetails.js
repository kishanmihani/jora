import React, { Component, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { use } from 'react'
import axios from 'axios'
import { selectedProduct,removeselectedProduct } from '../../../redux/actions/productActions'
import { authAxios } from '../../../Config/endpoint'
import { Rating } from '@mui/material'
import Loadericon from '../../Dashboard/Loadericon/Loadericon'
function ProductDetail() {
  const product = useSelector((state) => state.product)
  // alert(JSON.stringify(product))
  const productId = useParams()
  const dispatch = useDispatch();
  console.log(productId)
  const fatchProductApi = async () =>{
    const response= await authAxios.get(`/products/${productId.productId}`)
                    .catch(err => console.log(err))
                    dispatch(selectedProduct(response.data))
                //  alert(JSON.stringify(response.data))                 
  }
  useEffect(()=>{
    if(productId.productId !=="" && productId.productId){
      fatchProductApi()
    }
    return ()=>{
      dispatch(removeselectedProduct())
    }
  },[productId])
 
  // render() {
    return (
      <div className="container mt-5 card">
        <div className='card-body'>
          {Object.keys(product).length === 0 ? <Loadericon /> :
    <div className="row">
        {/* <!-- Product Images --> */}
        <div class="col-md-6 mb-4">
             <img src={product.thumbnail} alt="Product" className="img-fluid rounded mb-3 product-image" id="mainImage" />
            <div class="d-flex justify-content-between">
            {/* <img src={product.images} alt="Product" className="img-fluid rounded mb-3 product-image" id="mainImage" /> */}
              {product.images.map((data,i)=>{return (<img key={i} src={data} alt="Thumbnail 3" class="thumbnail rounded"  />)})}  
             {/*}   <img src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 2" class="thumbnail rounded" onclick="changeImage(event, this.src)">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 3" class="thumbnail rounded" onclick="changeImage(event, this.src)">
                <img src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 4" class="thumbnail rounded" onclick="changeImage(event, this.src)">/*/} </div> 
        </div>

        {/* <!-- Product Details --> */}
        <div class="col-md-6 text-start">
            <h2 class="mb-3">{product.title}</h2>
            <p class="text-muted mb-4">SKU: {product.sku}</p>
            <div class="mb-3">
                <span class="h4 me-2">${product.price}</span>
                <span class="text-muted"><s>$399.99</s></span>
            </div>
            <div class="mb-3">
            <Rating className='fs-6 bg-white icon-alignment' value={product.rating} readOnly></Rating>
                <span class="ms-2">{product.rating} (120 reviews)</span>
            </div>
            <p class="mb-4">{product.description}</p>
            <div class="mb-4">
                <h5>Color:</h5>
                <div class="btn-group" role="group" aria-label="Color selection">
                    {/* <input type="radio" class="btn-check" name="color" id="black" autocomplete="off" checked> */}
                    <label class="btn btn-outline-dark" for="black">Black</label>
                    {/* <input type="radio" class="btn-check" name="color" id="silver" autocomplete="off"> */}
                    <label class="btn btn-outline-secondary" for="silver">Silver</label>
                    {/* <input type="radio" class="btn-check" name="color" id="blue" autocomplete="off"> */}
                    <label class="btn btn-outline-primary" for="blue">Blue</label>
                </div>
            </div>
            <div class="mb-4">
                <label for="quantity" class="form-label">Quantity:{product.stock}</label>
                {/* <input type="number" class="form-control" id="quantity" value="1" min="1" style="width: 80px;"> */}
            </div>
            <button class="btn btn-primary btn-lg mb-3 me-2">
                    <i class="bi bi-cart-plus"></i> Add to Cart
                </button>
            <button class="btn btn-outline-secondary btn-lg mb-3">
                    <i class="bi bi-heart"></i> Add to Wishlist
                </button>
            <div class="mt-4">
                <h5>Key Features:</h5>
                <ul>
                    <li>Industry-leading noise cancellation</li>
                    <li>30-hour battery life</li>
                    <li>Touch sensor controls</li>
                    <li>Speak-to-chat technology</li>
                </ul>
            </div>
        </div>
    </div>}
    </div>
</div>

    )
  // }
}
export default ProductDetail