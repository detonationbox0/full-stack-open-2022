import { useState } from 'react'

const Heading = ({title}) =>
  <h2>{title}</h2> 

const Button = ({onClick, name}) =>
  <button onClick={onClick}>{name}</button>


const Stat = ({name, stat}) =>
  <p>{name} {stat || "-"}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodVote = () => setGood(good + 1)
  const neutralVote = () => setNeutral(neutral + 1)
  const badVote = () => setBad(bad + 1)

  const all = (good + neutral + bad)

  return (
    <div>
      <Heading title={"give feedback"} />
      <Button name={"good"} onClick={goodVote} />
      <Button name={"neutral"} onClick={neutralVote} />
      <Button name={"bad"} onClick={badVote}/>
      <Heading title={"statistics"} />
      <Stat name={"good"} stat={good} />
      <Stat name={"neutral"} stat={neutral} />
      <Stat name={"bad"} stat={bad} />
      <Stat name={"all"} stat={all} />
      <Stat name={"average"} stat={((good * 1) + (bad * -1)) / (all)} />
      <Stat name={"positive"} stat={(((good / all) || "-") + "%")} />
    </div>
  )
}

export default App