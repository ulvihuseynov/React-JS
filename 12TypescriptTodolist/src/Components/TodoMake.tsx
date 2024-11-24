import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'
import { TodoType } from '../types/types'

function TodoMake() {
  const disPatch=useDispatch()

  const [newTodo,SetNewTodo]=useState<string>("")
  const handleMakeTodo=()=>{
if (newTodo.trim().length==0) {
  alert("todo girin");
  return ;
}

const payload:TodoType={
  id:Math.floor(Math.random()*999999),
  content:newTodo
}

disPatch(createTodo(payload))
SetNewTodo('')
  }
  return (
    <div className='flex
    flex-col items-end justify-center gap-3 '>
      <input value={newTodo} 
      onChange={(e:React.ChangeEvent<HTMLInputElement>)=>SetNewTodo(e.target.value)}
      className='border-2 border-green-600 rounded-md w-[350px] py-1 px-2 outline-none' type="text" placeholder='Add task' />
      <button onClick={handleMakeTodo} className='px-8 cursor-pointer  bg-green-600 rounded-md text-white py-2 '>Add</button>
    </div>
  )
}

export default TodoMake
