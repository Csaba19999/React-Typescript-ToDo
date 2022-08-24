import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";


const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitFormHandeler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextRef.current!.value; // current! - nem lehet null , current? - lehet null

    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandeler}>
      <label htmlFor="text">New todo</label>
      <input ref={todoTextRef} type="text" id="text" />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
