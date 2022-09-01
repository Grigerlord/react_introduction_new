import React from 'react'
import './TodoSearch.css'
import { FaSearch } from 'react-icons/fa';

const TodoSearch = () => {
  return (
    <div className='boxSearch'>
      <FaSearch className='searchIcon' />
      <input placeholder='Cebolla' className='inputSearch' />
    </div>
  )
}

export { TodoSearch }