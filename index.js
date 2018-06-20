import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old.</p>
        </div>
    )
}

const HelloTimeCalc = () => {
    const now = new Date()
    const a = 10
    const b = 20
    return (
    <div>
        <p>Hello world, it is {now.toString()}</p>
        <p>{a} plus {b} is {a + b}</p>
    </div>
    )
}

const App = () => {
    const nimi = "Pekka"
    const ika = 10
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Arto" age={26 + 10}/>
            <Hello name={nimi} age={ika}/>
            <br />
            <HelloTimeCalc />
            <Hello />
        </div>
    )
}
    
ReactDOM.render(<App />, document.getElementById('root'));

