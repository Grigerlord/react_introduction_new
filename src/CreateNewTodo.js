import React from 'react'
import './CreateNewTodo.css'
import { InputCreateNewTodo } from './InputCreateNewTodo'
import { ButtonCreateNewTodo } from './ButtonCreateNewTodo'

const CreateNewTodo = () => {
  return (
    <div className='createNewTodo'>
      <InputCreateNewTodo />
      <ButtonCreateNewTodo />
    </div>
  )
}

export { CreateNewTodo }