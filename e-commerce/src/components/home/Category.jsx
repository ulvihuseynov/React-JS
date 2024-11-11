import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice'

const Category = ({setcategory}) => {
  const dispatch=useDispatch()
const {categories}=useSelector(state=>state.categories)

// console.log(categories)

  useEffect(()=>{
dispatch(getCategories())
  },[dispatch])
  return (
    <div className='bg-gray-100  p-4 w-8/12 h-fit'>
      <div className='text-xl font-bold pb-2 px-2 '>Category</div>
      {
        categories.map((item,index)=>(
          <div onClick={()=>setcategory(item)} className='text-lg hover:bg-gray-200 cursor-pointer p-2 ' key={index}>{item}</div>
        ))
      }
    </div>
  )
}

export default Category
