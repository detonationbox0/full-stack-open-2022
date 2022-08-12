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
  console.log(props)
  return (
    <div>
      { 
        props.parts.map((prop) => {
          return (
            <Part part={prop.name} count={prop.exercises} />
          )
        })
      }
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

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header coursename={course} />
      <Content  parts={[part1, part2, part3]}/>
      <Total count={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )

  /*
    const App = () => {
      const course = 'Half Stack application development'
      const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
      }
      const part2 = {
        name: 'Using props to pass data',
        exercises: 7
      }
      const part3 = {
        name: 'State of a component',
        exercises: 14
      }

      return (
        <div>
          ...
        </div>
      )
    }
   */
  

}

export default App