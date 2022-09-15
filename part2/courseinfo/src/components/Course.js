import React from 'react'


const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Part = (props) => {
    return (
      <p>{props.name} {props.exercises}</p>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {
          props.parts.map(prop => 
            <Part key={prop.id} name={prop.name} exercises={prop.exercises} /> )
        }
      </div>
    )
  }
  
  const Total = (props) => {
  
    const x = props.parts.reduce((x, part) =>
      x += part.exercises, 0)
  
    return (
      <b>Number of exercizes {x}</b>
    )
  }
  
  const Course = ({course}) =>  {
    // console.log(props)
    return (
      <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

  export default Course