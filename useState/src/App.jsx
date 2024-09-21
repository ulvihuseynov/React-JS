
import { useState } from 'react'
import './App.css'

function App() {
const [firstName,setFirstName]=useState(['alma','armud','nar','ciyelek'])
// const [lastName,setLastName]=useState('Huseynov')
// const changeName=()=>{
//   setFirstName({...firstName,name:"Ronaldo",age:44});
// }
  return (
  <div>
   
      {firstName.map((name,index)=>{
         return  <div key={index}>{name}</div>
      })}
  
 
  </div>
  )
}

export default App
