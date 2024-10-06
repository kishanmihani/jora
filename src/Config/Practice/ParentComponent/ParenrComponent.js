import React, { useState,useCallback } from 'react'
import Title from './Title';
import Button from './Button';
import Count from './count';
import Datafetching from '../datafetching';
import ClassTimer from './ClassTimer';
import HookTimer from './HookTimer';

 function ParenrComponent() {
    const [age,setage]=useState(25);
    const [salary,setsalary]=useState(50000);

    const incrementAge= useCallback(()=>{
    setage(age + 1);
    },[age])

    const incrementSalary = useCallback(() =>{
        setsalary(salary + 1000)
    },[salary])
  return (
    <div>
        <Title />
        <Count text='Age' count={age}></Count>
        <Button handleClick={incrementAge} >Increment Age</Button>
        <Count text='Salary' count={salary}></Count>
        <Button handleClick={incrementSalary} >Increment Salary</Button>
        <Datafetching />
        <ClassTimer />
        <HookTimer />
    </div>
  )
}
export default React.memo(ParenrComponent)