import { useQueries } from "@tanstack/react-query" 
import React from "react"
import axios from "axios"
const categoriesapi=() => {
     return axios.get("https://dummyjson.com/products/categories")
      }
 function ProductCatgories(){

   const results =useQueries([
    { queryKey: ["categories"], queryFn: categoriesapi },
  ]);


    return (
        <div>
            {JSON.stringify(results)}
            {/*  {data}
            {data.map((category) => (
        <div >{category.name}</div>
      ))} */}
            kkk
        </div>
    )
}

export default ProductCatgories