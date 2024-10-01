
import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [fName,setFName]=useState('')
const [lName,setLName]=useState('')

useEffect(()=>{
console.log('her zaman calisir')
})

useEffect(()=>{
  console.log('ilk render edildiginde calisir')
  },[])

useEffect(()=>{
  console.log('ilk render edildiginde ve fname ve lname deyisdiginde calsir')


},[fName,lName])


// useEffect(()=>{
//   console.log('ilk render edildiginde ve lname deyisdiginde calsir')
// },[lName])


return(
  <div>
<div><button onClick={()=>setFName('ulvi')}>Adi degistir</button></div>
<div><button onClick={()=>setLName('ulvi')}>Soyadi degistir</button></div>
 </div>
)
}
export default App
