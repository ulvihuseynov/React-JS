import React from 'react'

const DetailComp = ({productDetails}) => {
  return (
    <div className='flex gap-10 mt-20'>
      <div className='basis-4/12'>
        <img className='w-[600px] h-[520px]' src={productDetails?.image} alt="" />
      </div>

      <div className='mt-4 basis-7/12'>
<div className='font-bold text-4xl mt-5'> {productDetails?.title}</div>
<div className=' text-2xl my-2'> {productDetails?.description}</div>

<div className='text-red-500 text-lg my-2'>Rating: {productDetails?.rating.rate}</div>
<div className='text-red-500 text-lg my-2'>Count: {productDetails?.rating.count}</div>
<div className='text-5xl font-bold'> {productDetails?.price}</div>
<div className='flex items-center gap-5 my-3'>
    <div className='font-bold text-4xl cursor-pointer'>-</div>
<input className='font-bold text-5xl w-7 outline-none' type="text" value='0'/>
    <div className='font-bold text-4xl cursor-pointer'>+</div>

</div>
<div className='border text-lg bg-gray-600 text-white rounded-md w-[200px] flex justify-center items-center cursor-pointer h-[50px]'>
    Add to basket
</div>
      </div>
    </div>
  )
}

export default DetailComp
