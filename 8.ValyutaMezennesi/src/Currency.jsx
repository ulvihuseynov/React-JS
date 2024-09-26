import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
function Currency() {
  return (
    <div className='bg-money bg-50% bg-no-repeat h-[100vh] flex justify-center '>
        
      <div className='flex flex-col mt-20 items-center h-[40vh] gap-5 border-4 p-2 border-white shadow-2xl'>
       
        <h3 className='mt-3 text-3xl shadow-2xl font-bold text-white'>Currency Converter</h3>
       <div className='flex mt-8'> <input type="number" className='mr-3 outline-none w-22 py-2'/>
        <select name="" id="" className='w-14 py-2'>
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">TL</option>

        </select>
        
       
        <div className='bg-white p-2 mx-2 rounded-full'>
        <FaArrowAltCircleRight className='text-3xl' />
        </div>
       
        <select name="" id="" className='w-14 py-2'>
            <option value="">TL</option>
            <option value="">EUR</option>
            <option value="">USD</option>

        </select>
        <input type="number" className='ml-3 outline-none  w-22 py-2' /></div>
        <div>
        <button className='bg-white text-xl font-semibold p-2 rounded-md cursor-pointer mt-4 hover:bg-black hover:text-white transition-all duration-700'>Change</button>
      </div>
      </div>
     
    </div>
    
  )
}

export default Currency
