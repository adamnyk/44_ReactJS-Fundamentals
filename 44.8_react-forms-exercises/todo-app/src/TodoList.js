import { useState } from "react";
import "./TodoList.css";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"
import { v4 as uuid } from "uuid";


const ToDoList = () => {
    const INITIAL_TODOS_STATE = [
        // { text: 'get eggs', id: uuid() },
        // { text: 'empty compost', id: uuid() }
    ]
    const [todos, setTodos] = useState(INITIAL_TODOS_STATE)

    const removeTodo = (id) => {
        setTodos(todos => (
            todos.filter(todo => todo.id !== id)
        ))
    }

    const addTodo = (todo) => {
        if (todo.text) {
            const newTodo = {...todo, id: uuid()}
            setTodos(todos => [...todos, newTodo])
        }
    }

    const todoComponents = todos.map(todo =>  (
            <Todo
                text={todo.text}
                key={todo.id}
                id={todo.id}
                remove={removeTodo}
            />
        )
    )

    return (    
        <>
            <NewTodoForm addTodo={addTodo} />
            <div className="TodoList-todo-container">
                {todoComponents}
            </div>
        </>
    )
}

export default ToDoList