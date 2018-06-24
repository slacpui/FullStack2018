import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        const {name, age} = this.props
        const bornYear = () => new Date().getFullYear() - age

/*
        Yllä nuolifunktion kompakti tapa määritellä metodi. 
        Alla vähemmän kompakti, mutta samalla tavalla toimiva.        
        const bornYear = () => {
            return new Date().getFullYear() - this.props.age
        }
*/
        return (
            <div>
                <p>
                    Hello {name}, you are {age} years old. <br />
                    You were probably born {bornYear()}
                </p>
            </div>
        )
    }
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

const arto = {
    nimi: 'Arto Hellas',
    tervehdi: function () {
        console.log('Hello, my name is ', this.nimi)
    },
    laskeSumma: function(a, b) {
        console.log(a + b)
    }
}

arto.tervehdi()

setTimeout(arto.tervehdi.bind(arto), 1000)

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 1,
            vasen: 0,
            oikea: 0,
            kaikki: []
        }
// Bindin voi tehdä konstruktorissa ja kutsua viittaamalla metodiin normaalisti ilman bindia: <button onClick={this.kasvataYhdella}>
//        this.kasvataYhdella = this.kasvataYhdella.bind(this)
//        this.nollaa = this.nollaa.bind(this)
    }

    asetaArvoon = (arvo) => () =>  this.setState({counter: arvo})
    
    klikVasen = () => {
        this.setState({
            vasen: this.state.vasen + 1,
            kaikki: this.state.kaikki.concat('v')
        })
    }

    klikOikea = () => {
        this.setState({
            oikea: this.state.oikea + 1,
            kaikki: this.state.kaikki.concat('o')
        })
    }
/*
    kasvataYhdella = () => {
        this.setState((prevState) => ({ counter: this.state.counter + 1}));
    }
    nollaa = () => {
        this.setState({counter: 0})
    }
*/    
    render() {
        
        console.log('renderöidään: ' + this.state.counter)
        const historia = () => {
            if (this.state.kaikki.length === 0) {
                return (
                    <div>
                        <em>Sovellusta käytetään nappeja painelemalla</em>
                    </div>
                )
            }
            return (
                <div>
                    Näppäilyhistoria: {this.state.kaikki.join(' ')}
                </div>
            )
        }
                
        return (
            <div>
                <h1>Greetings</h1>
                <Hello name="Arto" age={26 + 10}/>
                <br />
                <HelloTimeCalc />
    
                <br />
                <h1>Esimerkki: Sivun uudelleenrenderöinti</h1>
                <Display counter={this.state.counter}/>
                <div>
                    <Button 
                        handleClick={this.asetaArvoon(this.state.counter + 1)}
                        text={'Plus'}
                    />
                    <Button
                        handleClick={this.asetaArvoon(this.state.counter - 1)}
                        text={'Minus'}
                    />
                    <Button 
                        handleClick={this.asetaArvoon(0)}
                        text={'Zero'}
                    />
                </div>
                <h1>Esimerkki: Monimutkaisemman tilan päivittäminen</h1>
                <div>
                    {this.state.vasen}
                    <Button
                        handleClick={this.klikVasen}
                        text={'Vasen'}
                    />
                    <Button 
                        handleClick={this.klikOikea}
                        text={'Oikea'}
                    />
                    {this.state.oikea}
                    <div>{historia()}</div>
                </div>
            </div>
        )
    }
    
}

ReactDOM.render(<App />, document.getElementById('root'));    

