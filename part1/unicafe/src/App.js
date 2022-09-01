import { useState } from 'react'

const Heading = ({title}) =>
  <h2>{title}</h2> 

// I think this is what is meant by
// "*Button* for defining the buttons used for submitting feedback"
const Button = ({onClick, name}) =>
  <button onClick={onClick}>{name}</button>

const StatisticLine = ({text, value}) => {
  return(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}
  

const Statistics = ({good, neutral, bad}) => {

  // Sum
  const all = good + neutral + bad

  // Only if all is 0, no feedback given
  if (!all) {
    return (
      <table>
        <tbody>
          <StatisticLine text={"No feedback given"} value={" "} />
        </tbody>
      </table>
    )
  }

  // Statistical math
  const average = ((good * 1) + (bad * -1)) / (all)
  const percent = (((good / all) * 100 || "-") + "%")

  return (
    <table>
      <tbody>
        <StatisticLine text={"good"} value={good} />
        <StatisticLine text={"neutral"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"all"} value={all} />
        <StatisticLine text={"average"} value={average} />
        <StatisticLine text={"percent"} value={percent} />
      </tbody>
    </table>
  )

}

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // onclick functions for <Button /> components
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App