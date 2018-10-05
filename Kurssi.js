import React from 'react'

const Kurssi = ({ kurssi }) => {
    console.log('Kurssi -propsit: ', kurssi)
    console.log('kurssi.id: ', kurssi.id)
    return (
        <div>
            <Otsikko kurssinNimi={kurssi.nimi}/>
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat}/>

        </div>
    )
}

const Otsikko = (kurssinNimi) => {
    console.log('Otsikko -propsit: ', kurssinNimi)
    return (
        <div>
            <h1>{kurssinNimi.kurssinNimi}</h1>
        </div>
    )
}

const Sisalto = ({ osat }) => {
    console.log('Sisaltoon tulevat propsit', osat)
    return (
        <div>
            {osat.map(osa => <Osa key={osa.id} osa={osa.nimi} tehtavia={osa.tehtavia}/> )}
        </div>
    )
}

const Osa = (osa) => {
    return (
        <p>{osa.osa} {osa.tehtavia}</p>
    )
}

const Yhteensa = ({osat}) => {
    var summa = osat.reduce(function(yhteensa, osa) {
        return yhteensa + osa.tehtavia
    }, 0)
    return (
        <div>
            <p>Yhteensä {summa} tehtävää</p>
        </div>
    )
}

export default Kurssi