import React from 'react'
import UserName from './UserName'
import Ternary from './Ternary'

const App = () => {
  // CONDITIONAL RENDERING = allows you to cntrol what gets rendered
  //                         in your application based on certain conditions
  //                         (show, hide, or change components)
  return (
    <>
      <UserName isLoggedIn = {true} name = 'Aswath' />

      <Ternary isLoggedIn = {false}/>
    </>
  )
}

export default App