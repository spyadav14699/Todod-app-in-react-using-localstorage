import React from 'react'
import Todo from './Todo'

export default function Todolist({todos , toggletodo}) {
  return (
    todos.map(todo => {
  return <Todo key={todo.id} toggletodo = {toggletodo} todo={todo} />
    })
    
  )
}
