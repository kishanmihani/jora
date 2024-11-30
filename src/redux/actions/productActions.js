import { ActionTypes } from "../contants/action.types"
export const setProduct = (products) =>{
       return {
         type:ActionTypes.SET_PRODUCTS,
         payload : products
       }
}

export  const selectedProduct = (product) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: product
    }
}