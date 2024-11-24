import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "./UserSlice"
import User from "./user"
import { store } from "./Store"

function Userlist() {
    const {users}=useSelector((store)=>store.user)
    const dispatch=useDispatch()
useEffect(()=>{
dispatch(getAllUsers())
},[])
    return (
      <div>
          {
            users && users.map((user)=>(
             <User key={user.id} user={user} />
            ))
        }
      </div>
    )
}
export default Userlist