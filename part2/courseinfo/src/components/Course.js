import React from 'react'


const Course = (props) => {
    return (
        <div>
            <Header
                name = { props.course.name }
            />
            <Content
                parts = { props.course.parts }
            />
            <Total
                parts = { props.course.parts }
            />
        </div>
    )
}

const Header = (props) => {
    return(
        <>
            <h1>{props.name}</h1>
        </>
    )
}

const Content = (props) => {
    const allConent = props.parts.map(part =>
        <Part key={part.id} part= {part} />
        );
    return(
        <div>{ allConent }</div>
    )
}

const Part = (props) => {
    return(
        <div>
            <p>
                {props.part.name} {props.part.exercises}
            </p>
        </div>
    )
}

const Total = (props) => {
    var totalAmount = props.parts.reduce((sum, total) => sum + total.exercises, 0)
    return(
        <div>
            <p> Number of exercises {totalAmount} </p>
        </div>
    )
}

export default Course
