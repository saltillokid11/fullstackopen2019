import React, { useState } from 'react'
import ReactDOM from 'react-dom'



// const Hello = (props) => {
//     const { name, age } = props
//     props = {
//         name: 'Arto Hellas',
//         age: 35,
//       }
//     const bornYear = () => new Date().getFullYear() - age

//     return (
//       <div>
//         <p>
//           Hello {props.name}, you are {props.age} years old
//         </p>
//         <p>So you were probably born in {bornYear()}</p>
//       </div>
//     )
//   }

  // const Display = ({ counter }) => <div>{counter}</div>

  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
  )

  const History = (props) => {
    if (props.allClicks.length === 0){
      return(
        <div>
          The app is used by pressing buttons
        </div>
      )
    }

    return(
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }
  
  
  const App = (props) => {
    const [ counter, setCounter ] = useState(0)
    const [ left, setLeft ] = useState(0)
    const [ right, setRight ] = useState(0)
    const [ clicks, setClicks ] = useState({ left:0, right:0 })
    const [ allClicks, setAll ] = useState([])
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
      setValue(newValue)
    }

    console.log('React Version:', React.version)
    console.log('rendering...', counter)
    console.log('allClicks...', allClicks)
    console.log('value ', value)

    const hello = (who) => () => {
      console.log('hello', who)
    }

    const handleLeftClick = () => {
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }

    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }

    // const handleClick = () => {
    //     console.log('clicked handle')
    //     setToValue(0)
    // }

    return (
        <div>
          <div>
            {left}
            <button onClick={handleLeftClick} text='left'>left</button>
            <button onClick={handleRightClick} text='right'>right</button>
            {right}
          </div>
          <History allClicks={allClicks} />
          <div>
            <div>{value}</div>
            <button onClick={() => setToValue(1000)}>
              thousand
            </button>
            <button onClick={() => setToValue(0)}>
              reset
            </button>
            <button onClick={() => setToValue(value + 1)}>
              increment
            </button>
          </div>
        </div>
      )
  }

  let counter = 1
  
  ReactDOM.render(<App counter={counter += 1}/>, document.getElementById('root'))