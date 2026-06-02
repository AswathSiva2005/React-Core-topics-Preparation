import React, { useState } from 'react'
 
const Counter = () => {
  const [count, setCount] = useState(0);

  const decBut = {
    backgroundColor: "yellow",
    borderRadius: "5px",
    padding: '10px',
    marginLeft: '600px'
  }

  const resBut = {
    backgroundColor: "lightcoral",
    borderRadius: "5px",
    padding: '10px',
    marginLeft: '40px'
  }

  const incBut = {
    backgroundColor: "aqua",
    borderRadius: "5px",
    padding: '10px',
    marginLeft: '40px'
  }

  return (
    <>
      <h2 style={{textAlign:'center', marginTop:'100px'}}>{count}</h2>

      <button style={decBut} onClick={() => setCount(count - 1)}>Decrement</button>

      <button style={resBut} onClick={() => setCount(0)}>Reset</button>

      <button style={incBut} onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default Counter