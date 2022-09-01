import { useState } from 'react'

const Heading = ({title}) =>
  <h2>{title}</h2> 

const Button = ({onClick, name}) =>
  <button onClick={onClick}>{name}</button>


const Stat = ({name, stat}) =>
  <p>{name} {stat || "-"}</p>

const Statistics = ({stats}) => {
  if (stats.length === 0) {
    // All states are 0, no feedback has been given
    return (<Stat name={"No feedback given"} stat={" "} />)
  }

  // Will contain a <Stat /> for each statistic in stats array
  const statContainer = [];
  stats.forEach((stat) => { // For each statistic in stats
    // Add a new Stat component
    statContainer.push(<Stat name={stat.name} stat={stat.value} />)
  });

  return statContainer

}

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // declare onclick functions for <Button /> components
  const goodVote = () => setGood(good + 1)
  const neutralVote = () => setNeutral(neutral + 1)
  const badVote = () => setBad(bad + 1)

  // Perform statistical math
  const all = (good + neutral + bad)
  const average = ((good * 1) + (bad * -1)) / (all)
  const percent = (((good / all) || "-") + "%")

  // Array containing statistics to be displayed
  let statistics;

  if (good === 0 && neutral === 0 && bad === 0) {
    // Initial states are 0
    // Empty array will display as "No feedback given"
    statistics = []
  } else {
    // Statistics to be displayed
    statistics = [
      { name: "good", value: good },
      { name: "neutral", value: neutral },
      { name: "bad", value: bad },
      { name: "all", value: all },
      { name: "average", value: average },
      { name: "percent", value: percent },
    ]   
  }


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