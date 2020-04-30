import React from 'react'

const Total = (props) => {

  return (
    <>
      <p>Number of exercises {props.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
    </>
  )
}

export default Total;
