import React from 'react'
import './modal.css'
const Modal = ({score}) => {
  return (
    <div className='modal'> 
      <div className='modal-title'>Score: {score}</div>
      <div>
        <button onClick={()=>window.location="/"} className='modal-btn'>Yeniden basla</button>
      </div>
    </div>
  )
}

export default Modal
