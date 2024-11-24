import React  from 'react'
import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'
import useCopy from './hooks/useCopy'
function App() {
  
 const {count,artir,azalt}=useCounter()
 const {open,change}=useToggle()
 const [copied,copy]=useCopy("calis qaqas")
  return (
    <div>
      
      <div>
        {copied && 'kopyalandi'}
        <button onClick={copy}>Copy</button>
      </div>
     <div>
     {open && <div style={{width:"100px",height:'100px',backgroundColor:"green"}}></div>}
      <button onClick={change}>{open ? 'Gizle':"Goster"}</button>
     </div>
<div>{count}</div>
      <button onClick={artir}>Artir</button>
      <button onClick={azalt}>Azalt</button>
    </div>
  )
}

export default App
