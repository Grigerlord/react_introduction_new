import React from 'react'
import './ViewOption.css'

const ViewOption = (props) => {
  return (
    <button type='button' >{props.option}</button>
  )
}

export { ViewOption }