import React from 'react'


export default function Todo({todo, toggletodo}) {
  function handleToClick() {
    toggletodo(todo.id);
  }
  return (
    <>
 
      <label>

        <input type="checkbox" checked={todo.completed} onChange = {handleToClick}/>

       {todo.name} {todo.quantity} {todo.price}
      </label>

      <br></br>
     

    
    </>
    
  )
}
