import React, { useContext, useRef } from 'react'
import { TodosContext } from '../store/todo-context'
import classes from './NewTodo.module.css'

function NewTodo() {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event : React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    if(enteredText.trim().length ===0){
      return;
    }

    todosCtx.addTodo(enteredText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id='text' ref={todoTextInputRef}/>
    </form>      
  )
}

export default NewTodo
