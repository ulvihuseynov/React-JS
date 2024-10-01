
import React from "react";
import Todo from "./Todo";

function TodoList({todos,onRemoveTodo,onUpdateTodo}) {
    // console.log(todos)

    return (
        <div className="w-96 my-7">
            {
                todos && todos.map((todo)=>(
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo}/>
                ))
            }
           
        </div>
    )
}

export default TodoList