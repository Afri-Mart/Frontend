import React, { useState } from 'react'
import './header.css'

function SearchBar() {

    const [query, setQuery] = useState('');

  return (
    <div className='search-container'>
        <i className="material-icons search-icon">search</i>
        <label htmlFor='search'>
        <input
            className='search-input'
            type='search'
            name='search'
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
        </label>
    </div>
  )
}

export default SearchBar

