import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };
    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <>
            <div className="col-1 p-0 m-0">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkDefault"
                        checked={todo.completed}
                        onChange={toggleCompleted}
                    />
                </div>
            </div>
            <div className="col-9">
                <input type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                    placeholder="name@example.com"/>
            </div>
            <div className="col-1">
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                    onClick={() => {
                        if (todo.completed) return;

                        if (isTodoEditable) {
                            editTodo();
                        } else setIsTodoEditable((prev) => !prev);
                    }}
                    disabled={todo.completed}
                >
                    {isTodoEditable ? "📁" : "✏️"}
                </button>
            </div>
            <div className="col-1">
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                    onClick={() => deleteTodo(todo.id)}
                >
                    ❌
                </button>
            </div>

        </>
    );
}

export default TodoItem;
