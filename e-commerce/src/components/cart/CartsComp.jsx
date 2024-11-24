import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartsComp = ({cartItem}) => {
  const dispatch =useDispatch()
  return (
   <div className='flex items-center justify-between'>
     <div className='my-8 '>
     <img className='w-[150px] h-[150px] ' src={cartItem?.image} alt="" />
    </div>
    <div className='w-[474px]'>
      <div className='text-xl'>{cartItem?.title}</div>
      <div>{cartItem?.description}</div>

    </div>
    <div className='font-bold text-2xl'>{cartItem?.price} AZN ( {cartItem?.quantity})</div>
    <div onClick={()=>dispatch(removeFromCart(cartItem?.id))} className='w-[180px] rounded-md bg-red-500 text-white cursor-pointer h-16 text-xl flex justify-center items-center'>Remove product</div>
   </div>
  )
}

export default CartsComp
