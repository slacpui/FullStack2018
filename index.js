import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

const Osa = (props) => {
    return (
        <p>{props.osa} {props.tehtavia}</p>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.valitaOsa1} tehtavia={props.valitaTehtavat1}/>
            <Osa osa={props.valitaOsa2} tehtavia={props.valitaTehtavat2}/>
            <Osa osa={props.valitaOsa3} tehtavia={props.valitaTehtavat3}/>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
            <p>Yhteensä {props.tehtavia1 + props.tehtavia2 + props.tehtavia3} tehtävää</p>
        </div>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14

    return (
        <div>
            <Otsikko name={kurssi} />
            <Sisalto valitaOsa1={osa1} valitaTehtavat1={tehtavia1} valitaOsa2={osa2} valitaTehtavat2={tehtavia2} valitaOsa3={osa3} valitaTehtavat3={tehtavia3}/>
            <Yhteensa tehtavia1={tehtavia1} tehtavia2={tehtavia2} tehtavia3={tehtavia3}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

