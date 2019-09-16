import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Hello = (props) => {
    const { name, age } = props
    props = {
        name: 'Arto Hellas',
        age: 35,
      }
    const bornYear = () => new Date().getFullYear() - age

    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
  }

  const Display = ({ counter }) => <div>{counter}</div>

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )
  
  const App = (props) => {
    const [ counter, setCounter ] = useState(0)
    
    const setToValue = (value) => () => setCounter(value)

    const handleClick = () => {
        console.log('clicked')
    }
    console.log('rendering...', counter)
  
    return (
        <div>
          <Display counter={counter}/>
          <Button
            onClick={() => setToValue(counter + 1)}
            text='plus'
          />
          <Button
            onClick={() => setToValue(counter - 1)}
            text='minus'
          />
          <Button
            onClick={() => setToValue(0)}
            text='zero'
          />
        </div>
      )
  }

  let counter = 1
  
  ReactDOM.render(<App counter={counter += 1}/>, document.getElementById('root'))