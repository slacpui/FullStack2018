import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }
    

    lisaaHyva = () => this.setState({hyva: this.state.hyva + 1})
    lisaaNeutraali = () => this.setState({neutraali: this.state.neutraali + 1})
    lisaaHuono = () => this.setState({huono: this.state.huono + 1})

    render() {
        const Button = ({handleClick, text}) => (
            <button onClick={handleClick}>
                {text}
            </button>
        )

        
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
                    />
                    <Button 
                        handleClick={this.lisaaHuono}
                        text={'Huono'}
                    />
                </div>
                <h2>Statistiikka</h2>
                <div>
                    <p>
                        Hyvä: {this.state.hyva} <br />
                        Neutraali: {this.state.neutraali} <br />
                        Huono: {this.state.huono}
                    </p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));