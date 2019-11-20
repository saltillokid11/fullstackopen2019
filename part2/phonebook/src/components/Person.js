import React from 'react'

const Person = (props) => {
  return (
    <div>
      {props.person.name} {props.person.number}
      <button onClick={props.deletePerson} name={props.person.name} id={props.person.id}>delete</button>
    </div>
  )
}

export default Person