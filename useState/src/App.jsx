
import { useState } from 'react'
import './App.css'

function App() {
const [count,setCount]=useState(0)
// const [lastName,setLastName]=useState('Huseynov')
// const changeName=()=>{
//   setFirstName({...firstName,name:"Ronaldo",age:44});
// }
const artir=()=>{
  setCount(count+1)
}
const azalt=()=>{
 if (count>0) {
  setCount(count-1)
 }
}
  return (
  <div>
   <div>{count}</div>

   <div><button onClick={artir}>Artir</button></div>
   
   <div><button onClick={azalt}>Azalt</button></div>
 
  </div>
  )
}

export default App
