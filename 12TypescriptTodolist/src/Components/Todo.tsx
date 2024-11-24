import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { TodoType } from '../types/types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';
import { FaCheck } from "react-icons/fa";

interface TodoProps{
  todoProps:TodoType
}


function Todo({todoProps}:TodoProps) {
  const {id,content}=todoProps
const disPatch=useDispatch();

const [editAble,setEditAble]=useState<boolean>(false)
const [newTodo,setNewTodo]=useState<string>(content)

  const handleRemoveTodo=()=>{
disPatch(removeTodoById(id))
  }
const handleUpdateTodo=()=>{
  const payload:TodoType={
    id,
    content:newTodo
  }
 disPatch( updateTodo(payload))
 setEditAble(false)
}
  return (
    
   <div className='flex items-center justify-between w-[350px] mt-8 border-2 border-green-600 rounded-md px-2 py-1'>
    <div>{editAble ? <input value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)} className='border-0 outline-none' type='text'/> :<div>{content}</div>}</div>
    <div className='flex gap-3 text-xl text-green-800 cursor-pointer'>
    <CiCircleRemove  onClick={handleRemoveTodo}/>
  
    {editAble ? <FaCheck onClick={handleUpdateTodo} /> :  <CiEdit  onClick={()=>setEditAble(true)}/>
    }
    

  
   </div>
    </div>
  )
}

export default Todo
