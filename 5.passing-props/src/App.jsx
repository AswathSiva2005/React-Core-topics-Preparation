import React from 'react'
import Student from './Student'

const App = () => {
  const userData = {
    name : "Aswath",
    age : 21,
    phone : 8072607334,
    email : "aswath@gmail.com"
  }

  return (
    <>
      <Student name={userData.name}
      age = {userData.age}
      phoneNo = {userData.phone}
      mailID = {userData.email}
      />

      {/* Below output  - phoneNo and mailID not prints
                          bcoz diff name used...
                          use only same field name in - Destructuring method
      */}
      <Student {...userData}/> 
    </>
  )
}

export default App