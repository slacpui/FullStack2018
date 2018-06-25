import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            summa: 0
        }
    }
    

    lisaaHyva = () => this.setState(
        {
            hyva: this.state.hyva + 1,
            summa: this.state.summa + 1
        })
    lisaaNeutraali = () => this.setState({neutraali: this.state.neutraali + 1})
    lisaaHuono = () => this.setState(
        {
            huono: this.state.huono + 1,
            summa: this.state.summa - 1
        })


    render() {
        const Button = ({handleClick, text}) => (
            <button onClick={handleClick}>
                {text}
            </button>
        )

        const Statistic = ({tilasto}) => <a>{tilasto}</a>

        const Statistics = () => {
            return (
            <div>
                <p>
                    Hyvä: <Statistic tilasto={this.state.hyva}/> <br />
                    Neutraali: <Statistic tilasto={this.state.neutraali}/><br />
                    Huono: <Statistic tilasto={this.state.huono}/><br />
                    Keskiarvo: <Statistic tilasto={keskiarvo()}/><br />
                    Positiivisia: <Statistic tilasto={positiiviset()}/> %
                </p>
            </div>
            )
        }

        const keskiarvo = () => {  
            if (this.state.hyva + this.state.neutraali + this.state.huono === 0) {
                return 0
            } 
            return (this.state.summa / (this.state.hyva + this.state.neutraali + this.state.huono)).toFixed(1)   
        }

        const positiiviset = () => {
            if (this.state.hyva + this.state.neutraali + this.state.huono === 0) {
                return 0
            }
            return (this.state.hyva / (this.state.hyva + this.state.neutraali + this.state.huono) * 100).toFixed(1);
        }
            
        
        return (
            <div>
                <h1>Tehtävä 1.6 - 1.14</h1>
                <h2>Mitä mieltä olet Unicafen palvelusta tänään?</h2>
                <div>
                    <Button 
                        handleClick={this.lisaaHyva}
                        text={'Hyvä'}
                        
                    />
                    <Button 
                        handleClick={this.lisaaNeutraali}
                        text={'Neutraali'}
                        palautteita={this.state.palautteita + 1}
                    />
                    <Button 
                        handleClick={this.lisaaHuono}
                        text={'Huono'}
                        summa={this.state.summa - 1}
                        palautteita={this.state.palautteita + 1}
                    />
                </div>
                <h2>Statistiikka</h2>
                <div>{Statistics()}</div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));