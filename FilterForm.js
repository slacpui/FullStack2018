import React from 'react'

const FilterForm = ({ handleChange, searchText, text }) => (
  <form>
    <div>
      {text}
      <input
        value={searchText}
        onChange={handleChange}
      />
    </div>
  </form>
)

export default FilterForm