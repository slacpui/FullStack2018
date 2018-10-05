import React from 'react'

const NewPersonForm = ({ handleSubmit, addNewName, handleNameChange, addNewNumber, handleNumberChange, nameText, numberText }) => (
    <form onSubmit={handleSubmit}>
      <div>
        {nameText}
        <input 
          value={addNewName} 
          onChange={handleNameChange}
        />
        </div>
        <div>
          {numberText}
          <input
            value={addNewNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
    </form>
  )

  export default NewPersonForm