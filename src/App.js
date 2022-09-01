import React from 'react'
import './App.css'
import { Title }         from './Title'
import { CreateNewTodo } from './CreateNewTodo'
import { TodoList }      from './TodoList'
import { TodoItem }      from './TodoItem'
import { TodoSearch }    from './TodoSearch'
import { TodoCounter }   from './TodoCounter'
import { View }          from './View'

const todos = [
  { text: 'comprar cebolla', completed: false},
  { text: 'pelar cebolla',   completed: false},
  { text: 'cortar cebolla',  completed: false},
  { text: 'comer cebolla',   completed: false}
]

function App(props) {
  return (
    <React.Fragment>

      <Title />

      <CreateNewTodo />

      <TodoSearch />


      <TodoList >
        {
          todos.map(todo => (
            <TodoItem key={props.text} text={todo.text} />
          ))
        }
      </TodoList>

      <View />


      <TodoCounter />

    </React.Fragment>
  );
}

export { App };
