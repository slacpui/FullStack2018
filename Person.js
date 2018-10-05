import React from 'react'

const Person = ({ henkilo }) => {
    return (
      <p>{henkilo.name} {henkilo.number}</p>
    )
  }

export default Person