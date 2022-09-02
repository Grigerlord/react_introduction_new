import React from 'react'
import './Title.css'
import { FaMoon } from 'react-icons/fa';


const Title = () => {
  return (
    <div className='title'>
      <h1>TODO</h1>
      <span><FaMoon /></span>
    </div>
  )
}

export { Title }