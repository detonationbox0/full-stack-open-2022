import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  // Counter array same length as anecdote list
  let votesArr = new Uint8Array(anecdotes.length);

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(votesArr)

  // Next Quote button is clicked
  const nextQuote = () => {
    // Random number from 0 to length of anecdotes
    const rnd = Math.floor(Math.random() * (anecdotes.length));
    // Set selected's state
    setSelected(rnd);
  }

  // Vote button is clicked
  const addVote = () => {
    // Create new Array object
    let newVotes = [...votes];
    // Add 1 the current state's count for this quote
    // assign to duplicated array
    newVotes[selected] = votes[selected] + 1;
    // Set state of votes to duplicated array
    setVotes(newVotes);
  }

  // Get the index of the largest item from the votes array
  let largestVoteIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={addVote}>vote</button>
      <button onClick={nextQuote}>next anectdote</button>
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[largestVoteIndex]}</p>
      <p>has {votes[largestVoteIndex]} votes</p>
    </div>
  )
}

export default App