import React from 'react'

const Country = (props) => {
  return (
    <div>
      {props.country}
      <button value={props.country} onClick={props.handleSearchChange}>show</button>
    </div>
  )
}

export default Country