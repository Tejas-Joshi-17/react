import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './contexts/TodoContext'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    // console.log(`Todos is :- ${JSON.stringify(todo)}`)
    // console.log(`Todos is :- ${({...todo})}`)
    // setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
    setTodos((prev) => [{id: Date.now(), ...todo}] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="container text-center mt-4 w-50">
        <div className="row">
          <div className="col-12 fs-3">Manage Your TODO's</div>
        </div>
        <div className="row mb-4">
          <TodoForm />
        </div>
      </div>
      <div className="container text-center mt-4 w-50">
        {todos.map((todo) => (
          <div key={todo.id} className='row  justify-center'>
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </TodoProvider>
  )
}

export default App;