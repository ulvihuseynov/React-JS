import React from 'react'
import './Dropdown.css'
const Dropdown = ({difficulty,setDifficultyChange}) => {
  return (
    <div className='dropdown'>
<select onChange={e=>setDifficultyChange(e.target.value)} name="" id="">
 {
    difficulty.map((dfCulty,index)=>(
        <option key={index} value={dfCulty}>{dfCulty}</option>
   ))
 }
</select>
    </div>
  )
}

export default Dropdown
