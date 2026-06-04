import React from 'react'

const App = () => {
  const students = [
    {id : 1, name : "Aswath"},
    {id : 2, name : "Hari"},
    {id : 3, name : "Hema"}
  ]
  return (
    <>
      {students.map((student) => (
          <h3 key={student.id}>{student.name}</h3>
      ))}
      
    </>
  )
}

export default App
