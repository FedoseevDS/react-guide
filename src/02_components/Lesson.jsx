import React, { Component } from "react"

function Welcome () { // создал функцию, отсутствует state и метода жизненного цикла компонента
    return <h1>Hello world!</h1>
}

class SuperWelcome extends Component { // создал класс
    render() {
        return <h1>Hello world</h1>
    }
} 

function Lesson() {
    return (
        <div>
            <Welcome /> 
            <SuperWelcome />
        </div>
    )
}

export default Lesson;