import React from 'react';
import FilterForm from './components/FilterForm'
import Person from './components/Person'
import NewPersonForm from './components/NewPersonForm'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      showAll: true
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        this.setState({ persons: response.data })
      })
  }

  addPerson = (event) => {
    event.preventDefault()
    const uusiHenkilo = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    let identical = 0
    this.state.persons.forEach(function(name) {
      if (uusiHenkilo.name === name.name) {
        identical++
        alert('Henkilö on jo luettelossa')
      }
    })

    let persons = this.state.persons

    if (identical === 0 && uusiHenkilo.name.localeCompare("") !== 0) {
      persons = this.state.persons.concat(uusiHenkilo)
    } else if (uusiHenkilo.name.localeCompare("") === 0) {
      alert('Nimi puuttuu')
    }
    
    this.setState({
      persons,
      newName: '',
      newNumber: ''
    })
  }

  handleNewName = (event) => {
    this.setState({newName: event.target.value})
  }

  handleNewNumber = (event) => {
    this.setState({newNumber: event.target.value})
  }

  handleFilterName = (event) => {
    this.setState({filter: event.target.value})
    if (event.target.value.localeCompare("") !== 0 ) {
      this.setState({showAll: false})
    } else {
      this.setState({showAll: true})
    }
  }

  render() {

    const namesToShow = 
      this.state.showAll ?
        this.state.persons :
        this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <FilterForm
          text={'rajaa näytettäviä:'}
          searchText={this.state.filter}
          handleChange={this.handleFilterName}
        />
        <h2>Lisää uusi</h2>
        <NewPersonForm
          handleSubmit={this.addPerson}
          nameText={'nimi:'}
          addNewName={this.state.newName} 
          handleNameChange={this.handleNewName}
          numberText={'numero:'}
          addNewNumber={this.state.newNumber}
          handleNumberChange={this.handleNewNumber}
        />
        <h2>Numerot</h2>
          <div>
            {namesToShow.map(person => <Person key={person.name} henkilo={person}/>)}
          </div>
      </div>
    )
  }
}

export default App

