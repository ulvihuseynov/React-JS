import React, { useEffect, useState } from 'react'
import './quiz.css'
import * as api from '../../api/api'
import { useParams } from 'react-router-dom'
import QuestionCard from '../../components/questionCard/QuestionCard'
import Modal from '../../components/modal/Modal'
const Quiz = () => {
    const {difficulty,amount}=useParams()
   const [questionData,setQuestionData]=useState([])
   const [score,setScore]=useState(0)
   const [count,setCount]=useState(0)
   const [modal,setModal]=useState(false)


    
    useEffect(()=>{
const getData=async ()=>{
const data=await api.fetchApi(difficulty,amount)
setQuestionData(data)
}
getData()
    },[])
    console.log(questionData)
  return (
    <div className='quiz'>
        {
            modal ? <Modal score={score}/> :
            <QuestionCard
questionData={questionData}
score={score}
setScore={setScore}
count={count}
setCount={setCount}
modal={modal}
setModal={setModal}
/>
        }

    </div>
  )
}

export default Quiz
