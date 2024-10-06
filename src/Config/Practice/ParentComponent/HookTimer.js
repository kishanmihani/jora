import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

function HookTimer() {
    const [timer,settimer] = useState(0)
    const intervalRef = useRef(null)
    useEffect(()=>{
        intervalRef.current  = setInterval(()=>{
            settimer(prevTimer => prevTimer + 1)
        },1000)

        return ()=>{
            clearInterval(intervalRef.current)
        }
    })
  return (
    <div>
       Hook Timer - {timer}
       <button onClick={()=>clearInterval(intervalRef.current)}>stop timer function</button>
    </div>
  )
}

export default React.memo(HookTimer)