import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="container text-center w-50 mt-5">
      <div className="row">
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Todo
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddTodo