import React from 'react'
import { useNavigate } from 'react-router-dom'


const Product = ({products}) => {
  const navigate=useNavigate()
   const {id,title,image,price}=products
   
  return (
  <div onClick={()=>navigate(`detail/${id}`)} style={{width:'250px',cursor:'pointer'}}>
<div>{title}</div>
<img style={{width:'200px'}} src={image} alt="" />
<div>{title}</div>

  </div>
  )
}

export default Product
