import React from 'react'
import { ViewOption } from './ViewOption';
import './View.css'

const View = () => {
  return (
    <div className='view'>
        <ViewOption option='All' />
        <ViewOption option='Active' />
        <ViewOption option='Complete' />
    </div>
  )
}

export { View }