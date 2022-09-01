import React from 'react'
import './TodoItem.css'
import { FaCheck, FaEllipsisV, FaTrashAlt, FaPen } from 'react-icons/fa';

const TodoItem = (props) => {
  return (
    <li className='liTodoItem'>
        <span className='completeTodo'> <FaCheck /> </span>

        <p>{ props.text }</p>
        
        <nav className='deleteTodo'>
          <ul>
            <li>
              <ul>
                <li> <span>Edit</span>  <FaPen />       </li>
                <li> <span>Delete</span> <FaTrashAlt /> </li>
              </ul>
              <FaEllipsisV />
            </li>
          </ul>
        </nav>
    </li>
  )
}

export { TodoItem }