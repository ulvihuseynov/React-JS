
import { useState } from 'react'
import './App.css'

function App() {
const [vize, setVize]=useState(0);
const [vize2, setVize2]=useState(0)
const average=()=>{
  debugger
const toplamSonuc=topla() / 2
yazdir(toplamSonuc)
}

const topla=()=>{
  debugger

  const toplam=vize+vize2
  return toplam
}
const yazdir=(result)=>{
  debugger 
console.log("average: " + result )
}
  return (
    <div>
      <div>
        <input type="number"  value={vize} onChange={(e)=>setVize(+e.target.value)} />
        
      </div>
      <div>
        <input type="number" value={vize2} onChange={(e)=>{setVize2(+e.target.value)}} />
        
      </div>
      <div><button onClick={average}>Average</button></div>
    </div>
  )
}

export default App
