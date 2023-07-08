import React from 'react'
import './Person.css'

const Person = ({name,age,favColor}) => {
  return (
    <article className="person">
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
        <p>Fav color: {favColor}</p>
    </article>
  )
}

export default Person
