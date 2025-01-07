import { useQueries } from "@tanstack/react-query" 
import React from "react"
import axios from "axios"
const categoriesapi=() => {
     return axios.get("http://localhost:4000/category")
      }
 function ProductCatgories(){

   const { isLoading, error, data } =useQueries([
    { queryKey: ["category"], queryFn: categoriesapi },
  ]);


    return (
        <div>
            {/* {JSON.stringify(results)} */}
            {/* {/*  {data} */}
            {data.map((category) => (
        <div >{category.name}</div>
      ))} 
            kkk
        </div>
    )
}

export default ProductCatgories