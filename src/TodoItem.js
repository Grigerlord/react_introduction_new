import React from 'react'
import './TodoItem.css'
import { FaCheck } from 'react-icons/fa';
import { FaEllipsisV } from 'react-icons/fa';

const TodoItem = (props) => {
  return (
    <li className='liTodoItem'>
        <span className='completeTodo'> <FaCheck /> </span>
          <p>{ props.text }</p>
        <menu className='deleteTodo'> <FaEllipsisV /> </menu>
    </li>
  )
}

export { TodoItem }