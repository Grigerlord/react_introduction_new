import React from 'react'
import './TodoList.css'

const TodoList = (props) => {
  return (
    <section className='sectionTodoList'>
        <ul className='ulTodoList'>
          { props.children }
        </ul>
    </section>
  )
}

export { TodoList }
