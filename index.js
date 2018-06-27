import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'hyva': 0,
            'neutraali': 0,
            'huono': 0,
        }
    }

    render() {
        const Button = ({handleClick, text}) => (
            <button 
                onClick={handleClick}>
                {text}
            </button>
        )

        const Statistic = ({tilasto}) => <a>{tilasto}</a>

        const Statistics = () => {
            if (this.state.hyva === 0 && this.state.neutraali === 0 && this.state.huono === 0) {
                return (
                    <div>
                        Ei yhtään palautetta annettu.
                    </div>
                )
            }
            return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Hyvä: <Statistic tilasto={this.state.hyva}/> </td>
                        </tr>
                        <tr>
                            <td>Neutraali: <Statistic tilasto={this.state.neutraali}/></td>
                        </tr>
                        <tr>
                            <td>Huono: <Statistic tilasto={this.state.huono}/></td>
                        </tr>
                        <tr>
                            <td>Keskiarvo: <Statistic tilasto={keskiarvo()}/></td>
                        </tr>
                        <tr>
                            <td>Positiivisia: <Statistic tilasto={positiiviset()}/> %</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
            )
        }

        const keskiarvo = () => {  
            if (this.state.hyva + this.state.neutraali + this.state.huono === 0) {
                return 0
            } 
            return ((this.state.hyva - this.state.huono) / (this.state.hyva + this.state.neutraali + this.state.huono)).toFixed(1)   
        }

        const positiiviset = () => {
            if (this.state.hyva + this.state.neutraali + this.state.huono === 0) {
                return 0
            }
            return (this.state.hyva / (this.state.hyva + this.state.neutraali + this.state.huono) * 100).toFixed(1);
        }

        const handlechange = (name) => () => {
            if (name === 'hyva') {
                this.setState({hyva: (this.state.hyva + 1)})      
            } else if (name === 'neutraali') {
                this.setState({neutraali: (this.state.neutraali + 1)})
            } else if (name === 'huono') {
                this.setState({huono: (this.state.huono + 1)})
            }

        }

        return (
            <div>
                <h1>Tehtävä 1.6 - 1.11</h1>
                <h2>Mitä mieltä olet Unicafen palvelusta tänään?</h2>
                <div>
                    <Button 
                        handleClick={handlechange('hyva')}
                        text={'Hyvä'}
                        
                    />
                    <Button 
                        handleClick={handlechange('neutraali')}
                        text={'Neutraali'}
                    />
                    <Button 
                        handleClick={handlechange('huono')}
                        text={'Huono'}
                        summa={this.state.summa - 1}
                    />
                </div>
                <h2>Statistiikka</h2>
                <div>{Statistics()}</div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));