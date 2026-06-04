import React from 'react'
import { useRef } from 'react'

const App = () => {
  const inputRef = useRef(100);

  function handleClick(){
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
  }

  return (
    <>
      <button onClick={handleClick}>click</button> <br/><br/>
      <input ref={inputRef}/>
    </>
  )
}

export default App