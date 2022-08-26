import { useState } from 'react'

const Heading = ({title}) =>
  <h2>{title}</h2> 

const Button = ({onClick, name}) =>
  <button onClick={onClick}>{name}</button>


const Stat = ({name, stat}) =>
  <p>{name} {stat || "-"}</p>

const Statistics = (props) => {
  props.stats.forEach((stat) => {
    console.log(stat)
    return (
      <Stat name={stat.name} stat={stat.value} />
    )
  })
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodVote = () => setGood(good + 1)
  const neutralVote = () => setNeutral(neutral + 1)
  const badVote = () => setBad(bad + 1)

  const all = (good + neutral + bad)
  const average = ((good * 1) + (bad * -1)) / (all)
  const percent = (((good / all) || "-") + "%")

  const statistics = [
    { name: "good", value: good },
    { name: "neutral", value: neutral },
    { name: "bad", value: bad },
    { name: "all", value: all },
    { name: "average", value: average },
    { name: "percent", value: percent },
  ] 

  return (
    <div>
      <Heading title={"give feedback"} />
      <Button name={"good"} onClick={goodVote} />
      <Button name={"neutral"} onClick={neutralVote} />
      <Button name={"bad"} onClick={badVote}/>
      <Heading title={"statistics"} />
      <Statistics stats={statistics} />
    </div>
  )
}

export default App