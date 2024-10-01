import React, { useState } from "react"
function CreateToDo({onMakeTodo}) {
    const [newTodo,setNewTodo]=useState('')

const clearTodo=()=>{
    setNewTodo('')
}

    const makeTodo=()=>{
       if(!newTodo) return;
const request={
  
    id:Math.floor(Math.random()*99999),
    content:newTodo
}
onMakeTodo(request)
clearTodo()
    }

    return (
        <div className="flex flex-col items-end justify-center ">
        <input value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)}
        type="text" placeholder="Add to task" className="w-96  h-10 rounded-md font-mono text-xl outline-none border-2 border-green-600 mb-4 pl-3 placeholder:text-green-600 placeholder:opacity-50"/>
        <button onClick={makeTodo} className="bg-green-600 text-white w-24 h-10 rounded-md hover:bg-green-800 font-mono text-xl cursor-pointer">Add</button>
        </div>
    )
}
export default CreateToDo