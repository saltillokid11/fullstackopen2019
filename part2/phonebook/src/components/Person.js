import React from 'react'

const Person = (props) => {
  return (
    <div>{props.person.name} {props.person.number}</div>
  )
}

// const Person = (props) => {
//   return props.searchResult.map((person) => {
//     return (
//       <div>
//         {person.name} {person.number} {person.key}
//       </div>
//     )
//   })
// };

export default Person