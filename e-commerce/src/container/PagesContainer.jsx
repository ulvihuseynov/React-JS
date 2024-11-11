import React from 'react'

const PagesContainer = ({children}) => {
    console.log(children)
  return (
    <div className='w-10/12 m-auto'>
     {children}
    </div>
  )
}

export default PagesContainer

