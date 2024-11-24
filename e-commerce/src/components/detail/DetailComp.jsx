import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'

const DetailComp = ({productDetails}) => {
  // console.log(productDetails.rating.count)
  const dispatch=useDispatch()
  let [quantity,setQuantity]=useState(0)
  const decrement=()=>{
  
    if (quantity>0) {
      setQuantity(quantity-1)
    }
  }
  const increment=()=>{
    if (quantity<productDetails?.rating?.count) {
      setQuantity(quantity+1)
    }
  }

  const addBasket=()=>{
dispatch(addToCart({id:productDetails?.id,title:productDetails?.title,image:productDetails?.image,quantity:quantity,price:productDetails?.price,}))
  }

  return (
    <div className='flex gap-10 mt-20'>
      <div className='basis-4/12'>
        <img className='w-[600px] h-[520px]' src={productDetails?.image} alt="" />
      </div>

      <div className='mt-4 basis-7/12'>
<div className='font-bold text-4xl mt-5'> {productDetails?.title}</div>
<div className=' text-2xl my-2'> {productDetails?.description}</div>

<div className='text-red-500 text-lg my-2'>Rating: {productDetails?.rating?.rate}</div>
<div className='text-red-500 text-lg my-2'>Count: {productDetails?.rating?.count}</div>
<div className='text-5xl font-bold'> {productDetails?.price}</div>
<div className='flex items-center gap-5 my-3'>
    <div onClick={decrement} className='font-bold text-4xl cursor-pointer'>-</div>
<input className='font-bold text-5xl w-[85px] outline-none' type="text" value={quantity}/>
    <div onClick={increment} className='font-bold text-4xl cursor-pointer'>+</div>

</div>
<div onClick={addBasket} className='border text-lg bg-gray-600 text-white rounded-md w-[200px] flex justify-center items-center cursor-pointer h-[50px]'>
    Add to basket
</div>
      </div>
    </div>
  )
}

export default DetailComp
