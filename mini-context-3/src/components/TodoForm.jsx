import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return;

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
      <form onSubmit={add} className="container text-center mt-4">
        <div className="row mt-3">
          <div className="col-10">
            <input 
                type="text" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Write Todo..."
                value={todo}
                onChange={(e) => {
                  console.log(console.log(`Event is :- ${e}`));
                  console.log(console.log(`Event is :- ${e}`));
                  setTodo(e.target.value)}
                }
            />
          </div>
          <div className="col-2">
            <button 
                type="submit" 
                className="btn btn-primary">
                Add
            </button>
          </div>
        </div>
      </form>
  );
}

export default TodoForm;