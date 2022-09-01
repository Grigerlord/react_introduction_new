import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
  return (
    <li className='liTodoItem'>
        <span className='completeTodo'> V </span>
          <p>{ props.text }</p>
        <span className='deleteTodo'> X </span>
    </li>
  )
}

export { TodoItem }