import React from 'react'

const Button = ({name,artir}) => {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
     <button onClick={artir}>{name}</button>
    </div>
  )
}

export default Button
