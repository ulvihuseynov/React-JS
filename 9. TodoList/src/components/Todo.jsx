import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
function Todo ({todo ,onRemoveTodo,onUpdateTodo}){
    const {id,content}=todo;
    const [editable,setEditAble]=useState(false)
    const [newTodo,setNewTodo]=useState(content)

const removeTodo=()=>{
    onRemoveTodo(id)
}
const updateTodo=()=>{
    const request={
        id:id,
        content:newTodo
    }
    onUpdateTodo(request)
    setEditAble(false)
}
    return (
     <div className="flex justify-between w-[100%] border-2 my-5 border-green-600 h-10 items-center p-3 rounded-md">
           <div>
           {editable ? <input value={newTodo}
           onChange={(e)=>setNewTodo(e.target.value)}
        type="text"className="  font-mono text-xl outline-none text-green-700 border-b-2 border-b-green-600 "/> : content}
           </div>
           <div className="flex gap-4 text-2xl text-green-700 font-extrabold cursor-pointer
           ">
           <CiCircleRemove onClick={removeTodo} />
           {editable ?  <FaCheck onClick={updateTodo} /> :  <FaRegEdit onClick={()=>setEditAble(true)} />}
          
          
           </div>
     </div>
    )
}
export default Todo