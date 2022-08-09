const Header = (props) => {
  return (
    <h1>{props.coursename}</h1>
  )
}

const Content = (props) => {
  return (
    <p>{props.part} {props.count}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of excersizes {props.count}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header coursename={course} />
      <Content part={part1} count={exercises1} />
      <Content part={part2} count={exercises2} />
      <Content part={part3} count={exercises3} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App