import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 p-10 flex items-center justify-end my-5'>
     <select onChange={(e)=>setSort(e.target.value)} name="" id="" className='px-16 py-3 outline-none'>
     <option disabled>Seciniz</option>
        <option value="artan">Artan</option>
        <option value="azalan">Azalan</option>

     </select>
    </div>
  )
}

export default Sorting
