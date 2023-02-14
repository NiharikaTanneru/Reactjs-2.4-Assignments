
import Button from "../Components/Button";
import Title from "../Components/Title";
import Count from "../Components/Count"
import React, { useState, useCallback } from 'react'
  
function ParentComponent(){
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(30000)

    const incrementAge = () => {
        setAge(age+1);
    }
    const incrementSalary = () => {
        setSalary(salary+10000);
    }

    return(
        <div>
            <Title />
            <Count text="age" count={age} />
            <Button handleClick={incrementAge}>incrementAge</Button>
            <Count text="salary" count={salary} />
            <Button handleClick={incrementSalary}>incrementSalary</Button>
        </div>
    )
  }

  export default ParentComponent;