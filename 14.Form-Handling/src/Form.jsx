import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState();
  
  return (
    <>
      <label htmlFor=''>User Name : </label>
      <input type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}/> <br/><br/>

      <label htmlFor=''>Password : </label>
      <input type='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}/> <br/><br/>
    
      <input type='submit'/>   
    </>
  )
}

export default Form