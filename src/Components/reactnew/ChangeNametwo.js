import axios from "axios";
import { useOptimistic } from "react";

function ChangeNametwo({currentName,onUpdateName}){
const [optimisticName,setoptimisticName] = useOptimistic(currentName)
const submitAction = async formData => {
    const newName = formData.get('name');
    setoptimisticName(newName)
    const updatename = await axios.post("https://675b0d079ce247eb19357ea8.mockapi.io/updatename",{'name':newName} )
    onUpdateName(updatename)
} 
  return (
          <form action={submitAction}>
            <p>Your name is: {optimisticName}</p>
            <p>
            <label>Change Name:</label>
            <input type="text" name="name" disabled={currentName !== optimisticName}></input>
            </p>
            <button type="submit" >Update</button>
          </form>
  )
}

export default ChangeNametwo;