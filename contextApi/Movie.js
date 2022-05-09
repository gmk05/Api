import React from 'react'

export default function Movie({ name ,price,id}) {
  return (
      <center>
    <div>{name}</div>
    <div>{price}</div>
    <div> {id}</div>
    </center>
  )
} 
 