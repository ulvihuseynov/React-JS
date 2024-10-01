

import { useState } from 'react'
import './assets/index.css'
import CreateToDo from './components/CreateToDo'

import TodoList from './components/TodoList'

function App() {
 const [todos,setTodos]=useState([])
 const makeTodo=(newTodo)=>{
setTodos([...todos,newTodo])
 }
// console.log(todos)
const removeTodo=(todoId)=>{
setTodos([...todos.filter((todo)=>todo.id !== todoId)])
// console.log(filteredArray)
}

const updateTodo=(editTodo)=>{
 const updateTodos=todos.map(todo=>{
 if (todo.id !== editTodo.id) {
    return todo
  }
  return editTodo
})
setTodos([...updateTodos])
}

  return (
  <div className='flex justify-center mt-20  items-center  flex-col'>
<CreateToDo onMakeTodo={makeTodo}/>
<TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo}/>

  </div>
  )
}

export default App
