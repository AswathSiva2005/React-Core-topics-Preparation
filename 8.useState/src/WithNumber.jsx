import React from 'react'
import { useState } from 'react';

const WithNumber = () => {

    // EVENTLISTENER = wait for the specific event happens...
    //                 if happens perform the operation 
    
    let num = 1;

    const addNum = () => {
        num = num + 1;
        console.log("Value is :", num);
    }


    // AFTER useState
    const [count, setCount] = useState(0);
 
    return (
    <>
        <h2>{num}</h2>
        <button onClick={addNum}>Add</button>

        <br/><br/><br/>

        {/*  OUTPUT - in console
        
        Value is : 2
        Value is : 3
        Value is : 4
        
        The problem is addition is done only in console but html page value is still - 1
        So we use useState to solve this problem
        */}


        {/* AFTER useState */}

        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br /> <br />
        <button onClick={() => setCount(count - 1)}>Decrement</button>

        <h3>num : {count}</h3>
        
        <button onClick={() => setCount(0)}>RESET</button>
    </>
  )
}

export default WithNumber;