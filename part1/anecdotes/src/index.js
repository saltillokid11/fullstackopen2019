import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([0,0,0,0,0,0]);
  const [maxvotes, setMaxVotes] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const nextanecdote = () => {
    let randInt =  Math.floor(Math.random() * props.anecdotes.length);
    setSelected(randInt);
  }

  const voteforanecdote = () =>{
    const newVote = [...vote];
    newVote[selected] += 1;

    setVote(newVote);

    let largestInArr = Math.max.apply(Math, newVote);
    arrayMaxIndex(newVote);
    setVote(newVote)
  }

  const arrayMaxIndex = function(array) {
    let indexVal = array.indexOf(Math.max.apply(null, array));
    setMaxIndex(indexVal);

    var largest = Math.max.apply(Math, array);
    setMaxVotes(largest);
  };


  return (
    <div>
      <div id='top'>
        <span>Anecdote of the Day</span>
      </div>
      <div id='anec'>
        {props.anecdotes[selected]}
      </div>
      <div id='buttons'>
        <button onClick={voteforanecdote}>Vote</button>
        <button onClick={nextanecdote}>next anecdote</button>
      </div>
      <div id='bottom'>
        <span>Anecdote with most votes</span>
      </div>
      <div className='result'>{props.anecdotes[maxIndex]}</div>
      <div className='result'>has {maxvotes} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)