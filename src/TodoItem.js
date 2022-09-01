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
              <FaEllipsisV />
              <ul>
                <li>Editar   <FaPen />      </li>
                <li>Eliminar <FaTrashAlt /> </li>
              </ul>
            </li>
          </ul>
        </nav>
    </li>
  )
}

export { TodoItem }