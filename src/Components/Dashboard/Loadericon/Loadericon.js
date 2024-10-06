import React from 'react'
import './Loadericon.css'
import { TbLoader2 } from "react-icons/tb";
export default function () {
  return (
    <div className='h-100 w-100'>
        <div className='m-auto h-100 d-flex align-items-center flex-column justify-content-center '>
        <h3 className="text-primary">JORA</h3>
        <TbLoader2 className="text-primary fs-5 fw-bolder loaderIcon"/>
        </div>
    </div>
  )
}
