import React from 'react'

const Student = (props ) => {
  return (
    <>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <h3>{props.phoneNo}</h3>
        <h4>{props.mailID}</h4>
    </>
  )
}

export default Student