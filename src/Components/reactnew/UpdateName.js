import axios from 'axios';
import React, { useState, useTransition } from 'react'
import { redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function UpdateName() {
  const [name,setName] = useState("");
  const [error,setError] = useState(null);
  const [isPending,startTransition] = useTransition()
  const navigate = useNavigate();
  const handleSubmit =  () =>{
   startTransition(async ()=>{
    const error =await axios.post("https://675b0d079ce247eb19357ea8.mockapi.io/updatename", { name });
  // setIsPending(false);
  if (error){
    setError(error)
    return;
  }
   navigate("/dashboard/Productlist");
   })
  // setIsPending(true);
  
  
  }

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  )
}

export default UpdateName