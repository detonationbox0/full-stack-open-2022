const Header = (props) => {
  return (
    <h1>{props.course}</h1>
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
      { // Escape HTML
        props.parts.map((prop) => {
          return ( // Return HTML
            <Part part={prop.name} count={prop.exercises} />
          )
        })
      }
    </div>
  )
}

const Total = (props) => {
  let x = 0; // Count the total number of exercises
  props.parts.forEach((part) => {
    x += part.exercises
  })
  return (
    <p>Number of exercizes {x}</p>
  )
}

const App = () => {

  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
    // <div>
    //   <Header coursename={course} />
    //   <Content  parts={parts}/>
    //   <Total count={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    // </div>
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