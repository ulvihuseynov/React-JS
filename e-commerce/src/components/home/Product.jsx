import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {
  console.log(product)
    const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`products/${product?.id}`)} className='w-[280px] mb-3 mx-2 border rounded-md relative cursor-pointer '>
         <div className='absolute top-0 right-0 bg-black text-white p-1 m-1 text-xl font-bold'>{product.price} <span>AZN</span></div>
      <img className='w-[190px] h-[190px]  mx-auto' src={product.image} alt="" />
     <div className='text-xl font-bold text-center px-2 mt-2'>{product.title}</div>
    </div>
  )
}

export default Product
