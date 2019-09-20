import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
)

// const DisplayGood = ({ good }) => <div>Good {good}</div>
// const DisplayNeutral = ({ neutral }) => <div>Neutral {neutral}</div>
// const DisplayBad = ({ bad }) => <div>Bad {bad}</div>

const Stats = (props) => {
  if(props.good < 1 && props.neutral < 1 && props.bad < 1){
    return(
      <div>
        <div>No feedback given</div>
      </div>
    )
  }
  //don't count unless we have values
  let sum = props.good + props.neutral + props.bad;
  return(
    <table>
      <tbody>
        <SingleStat text="Good" value={props.good}/>
        <SingleStat text="Bad" value={props.bad}/>
        <SingleStat text="Neutral" value={props.neutral}/>
        <SingleStat text="All" value={sum}/>
        <SingleStat text="Average" value={props.good - props.bad / sum}/>
        <SingleStat text="Positive" value={props.good / sum * 100}/>
      </tbody>
    </table>
  )
}

const SingleStat = (props) => {
  return(
    <tr>
      <td>{props.text}: {props.value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
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
            <Stats good={good} neutral={neutral} bad={bad}/>
        </div>
    </div>    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))