import React, { useState } from 'react'
import './introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'
const Introduce = () => {
    const difficulty=['easy','medium','hard']
    const [difficultyChange,setDifficultyChange]=useState('')
    console.log(difficultyChange)
    const navigate=useNavigate()
    const TotalQuestion=10
    const startQuiz=()=>{
        if (difficultyChange) {
            navigate(`/quiz/${difficultyChange}/${TotalQuestion}`)
        }
    }
  return (
    <div className='introduce'>
     <div className="introduce-container">
        <img className='introduce-img' src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-143799229.jpg" alt="" />
        <Dropdown difficulty={difficulty} setDifficultyChange={setDifficultyChange}/>
        <div onClick={startQuiz} className='introduce-btn'>Quize basla</div>
     </div>
    </div>
  )
}

export default Introduce
