import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <div className='container w-50'>
      {todos.length > 0 ? <div className='text-center mt-3 fs-5 mb-2'>Todos</div> : null}

      {todos.map((todo) => (
        <div className='row' key={todo.id}>
          <div className="col-10 p-1">
            <div className='form-control'>{todo.text}</div>
          </div>
          <div className="col-2 p-1">
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="btn text-center btn-danger border"
            >
              Delete
            </button>
          </div>  
         </div>
      ))}
      
    </div>
  )
}

export default Todos;