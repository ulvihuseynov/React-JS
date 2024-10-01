import React, { useState } from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';
 
let base_Url='https://api.freecurrencyapi.com/v1/latest';
let apiKey='fca_live_BcgOdrH4QWRdzFavMarjypKee8wVlS5ScTRCogY9'


function Currency() {
  const [amount,setAmount]=useState(0)
  const [fromCurrency,setfromCurrency]=useState('USD')
  const [toCurrency,setToCurrency]=useState('TRY')
  const [result,setResult]=useState(0)
const exChange= async()=>{
  
const response=await  axios.get(`${base_Url}?apikey=${apiKey}&base_currency=${fromCurrency}`)
let result=((response.data.data[toCurrency]) * amount).toFixed(2)
setResult(result)
}

  return (
    <div className='bg-money bg-50% bg-no-repeat h-[100vh] flex justify-center '>
        
      <div className='flex flex-col mt-20 items-center h-[40vh] gap-5 border-4 p-2 border-white shadow-2xl'>
       
        <h3 className='mt-3 text-3xl shadow-2xl font-bold text-white'>Currency Converter</h3>
       <div className='flex mt-8'> 
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} className='mr-3 outline-none w-22 py-2'/>
        <select onChange={(e)=>setfromCurrency(e.target.value)} name="" id="" className='w-14 py-2'>
            <option >USD</option>
            <option >EUR</option>
            <option >TRY</option>

        </select>
        
       
        <div className='bg-white p-2 mx-2 rounded-full'>
        <FaArrowAltCircleRight className='text-3xl' />
        </div>
       
        <select onChange={(e)=>setToCurrency(e.target.value)} name="" id="" className='w-14 py-2' >
            <option >TRY</option>
            <option >EUR</option>
            <option >USD</option>

        </select>
        <input onChange={(e)=>setResult(e.target.value)} type="number" className='ml-3 outline-none  w-22 py-2' value={result}  /></div>
        <div>
        <button onClick={exChange} className='bg-white text-xl font-semibold p-2 rounded-md cursor-pointer mt-4 hover:bg-black hover:text-white transition-all duration-700'>Change</button>
      </div>
      </div>
     
    </div>
    
  )
}

export default Currency
