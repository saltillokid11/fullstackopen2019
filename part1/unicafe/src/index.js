import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
)

const DisplayGood = ({ good }) => <div>Good {good}</div>
const DisplayNeutral = ({ neutral }) => <div>Neutral {neutral}</div>
const DisplayBad = ({ bad }) => <div>Bad {bad}</div>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log("good", good);
  console.log("neutral", neutral);
  console.log("bad", bad);
  
  return (
    <div>
        <div id='top'>
            <div>
                <p id='feed'>Give Feedback</p>
            </div>
            <Button onClick={() => setGood(good + 1)} text='good' />
            <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
            <Button onClick={() => setBad(bad + 1)} text='bad' />
        </div>
        <div id='bottom'>
            <div>
                <p id='stat'>Statistics</p>
            </div>
            <DisplayGood good={good}/>
            <DisplayNeutral neutral={neutral}/>
            <DisplayBad bad={bad}/>

        </div>
    </div>    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))