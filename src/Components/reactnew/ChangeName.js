import axios from 'axios';
import React from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useNavigate } from 'react-router-dom';

function ChangeName({ name, setName }){
    const navigate = useNavigate();
const [error,submitAction,isPending] = useActionState(
    async (previousState, formData) =>{
        try{
        let ss=( formData.get("name"));
        const response = await axios.post("https://675b0d079ce247eb19357ea8.mockapi.io/updatename",{name: (formData.get("name"))} )
       
      if (response.status !== 201) {
        return `Error: ${response.statusText}`;
      }
      navigate("/dashboard/Productlist");
      return null
     }catch(err){
        return err.response?.data?.message || "An unexpected error occurred.";
     }
     },
    null
)

    return (
          <div>
            <form action={submitAction}>
              <input type="text" name="name" />
              {/* <button type="submit" disabled={isPending}>
              {isPending ? "Updating..." : "Update"}
              </button> */}
              <DesignButton />
              {error && <p>{error}</p>}
            </form>
          </div>
    )
}

function DesignButton() {
    const {pending} = useFormStatus();
    return (<button type="submit" disabled={pending} >Update</button>)
  }

export default ChangeName