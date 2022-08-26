import { useState } from 'react'

const Heading = ({title}) =>
  <h2>{title}</h2> 

const Button = ({onClick, name}) =>
  <button onClick={onClick}>{name}</button>


const Count = ({quality, count}) =>
  <p>{quality} {count}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodVote = () => setGood(good + 1)
  const neutralVote = () => setNeutral(neutral + 1)
  const badVote = () => setBad(bad + 1)

  return (
    <div>
      <Heading title={"give feedback"} />
      <Button name={"good"} onClick={goodVote} />
      <Button name={"neutral"} onClick={neutralVote} />
      <Button name={"bad"} onClick={badVote}/>
      <Heading title={"statistics"} />
      <Count quality={"good"} count={good} />
      <Count quality={"neutral"} count={neutral} />
      <Count quality={"bad"} count={bad} />
    </div>
  )
}

export default App