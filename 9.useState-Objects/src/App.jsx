import React from 'react'
import { useState } from 'react';
const App = () => {
  const [student,setStudent] = useState({
    name : "Aswath",
    age : 21,
    mail : "aswath@gmail.com"
  });

  // Update only student age
  // const updateAge = () => {
  //   setStudent({
  //     ...student,
  //     age : student.age + 1
  //   })
  // }


  // To change the onject value
  const[name, setName] = useState({
    firstname : '',
    lastname : ''
  })


  return (
    <>  
      <h2>{student.name}</h2>
      <h3>{student.mail}</h3>

      {/* <button onClick={() => setStudent()}>Update</button> <br/><br/><br/> */}
    

      {/* To change input value using object */}
      <input 
        type='text'
        placeholder='First Name'
        value={name.firstname}
        onChange={(e) => setName({...name, firstname: e.target.value})}
      />
<br/><br/><br/>
      <input 
        type='text'
        placeholder='Last Name'
        value={name.lastname}
        onChange={(e) => setName({...name, lastname: e.target.value})}
      />

      <h2>First name : {name.firstname}</h2>
      <h2>Last name : {name.lastname}</h2>
    </> 
  )
}

export default App