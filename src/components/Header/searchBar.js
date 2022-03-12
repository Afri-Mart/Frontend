import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './header.css'

function SearchBar() {

    const [query, setQuery] = useState('');

  return (
    <div className='search-container'>
        <SearchIcon className='search-icon'/>
        <label className='input-field' htmlFor='search'>
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

