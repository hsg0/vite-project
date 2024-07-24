import React, { useState, useRef, useEffect } from 'react';
import './CSS/Todo.css';
import TodoItems from './TodoItems.jsx';

let count = localStorage.getItem("todos_count") ? Number(localStorage.getItem("todos_count")) : 0;

export const Todo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = () => {
        const newTodo = { no: count++, text: inputRef.current.value, display: "" };
        setTodos([...todos, newTodo]);
        inputRef.current.value = "";
        localStorage.setItem("todos_count", count);
    };

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className='todo'>
            <div className="todo-header">To-Do List</div>
            <div className='todo-add'>
                <input ref={inputRef} type='text' placeholder='Add your task' className='todo-input' />
                <div onClick={add} className="todo-add-btn">ADD</div>
            </div>
            <div className='todo-list'>
                {todos.map((item) => (
                    <TodoItems 
                        key={item.no} 
                        no={item.no} 
                        display={item.display} 
                        text={item.text} 
                        setTodos={setTodos} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Todo;