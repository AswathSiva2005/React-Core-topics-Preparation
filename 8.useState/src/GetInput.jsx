import React, { useState } from 'react'

const GetInput = () => {
    const [age,setAge] = useState(19);
  return (
    <>
        <input 
            type='text'
            placeholder='Enter your name'
            onChange={(e) => setAge(e.target.value)}
        />

        <h2>Age is : {age}</h2>
    </>
  )
}

export default GetInput