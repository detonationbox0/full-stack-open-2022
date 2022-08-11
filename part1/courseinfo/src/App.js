const Header = (props) => {
  return (
    <h1>{props.coursename}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.count}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts.one} count={props.counts.one} />
      <Part part={props.parts.two} count={props.counts.two} />
      <Part part={props.parts.three} count={props.counts.three} />
    </div>
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
      <Content  parts={{"one": part1, "two": part2, "three": part3}}
                counts={{"one":exercises1,"two":exercises2,"three":exercises3}} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App