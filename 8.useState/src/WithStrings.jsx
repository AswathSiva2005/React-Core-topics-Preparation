import { useState } from "react"
import React from 'react'

const WithStrings = () => {
    const [name, setName] = useState("Hari");
  return (
    <>
        <h2>My name is Name : {name}</h2>

        <button onClick={() => setName("Aswath")}>Change Name</button>
        <br/><br/>
    </>
  )
}

export default WithStrings