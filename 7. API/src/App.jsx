
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
const url='http://localhost:3005'
function App() {
// const getData=async(id)=>{
//   const res=await axios.get(`${url}/users/${id}`)
//   console.log(res.data)
// }
// getData(1)


const getData=async (id)=>{
  const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  console.log(res.data)
} 
const getUser=async(id)=>{
  const dataUser= await axios.get(`${url}/users/${id}`)
  console.log(dataUser.data.id)
}
// const createUser=async (newUser)=>{
//  const post=await axios.post(`${url}/users`,newUser)
//  console.log(post.data)
// }
// const update=(id,add)=>{
//   const newUpdate=axios.put(`${url}/users/${id}`,add)
// }

// const deleteUser=async (id)=>{
// await axios.delete(`${url}/users/${id}`)
// }
useEffect(()=>{
//   const userNew={
//     "id":3,
//     "name":'Pervin',
//     "password":'9wr76yu8'
//   }
//   const add={
// "name":'zapata'
//   }
  // createUser(userNew)
  // update(2,add)
  // deleteUser("3")
  getData(3)
  getUser("3452")
},[])
  return (
   <div>

   </div>
  )
}

export default App
