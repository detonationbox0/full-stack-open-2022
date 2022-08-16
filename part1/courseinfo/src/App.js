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
        props.parts.map((prop, index) => {
          // console.log(index)
          return ( // Return HTML
            <Part key={index} part={prop.name} count={prop.exercises} />
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
  
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )

}

export default App