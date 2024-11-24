import React, { useEffect } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { getTotalCart } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
const NavbarRight = () => {
  const dispatch=useDispatch()
  const {itemCount}=useSelector(state=>state.basketCart)
  const navigate=useNavigate()
// console.log(itemCount)
  useEffect(()=>{
dispatch(getTotalCart())
  },[dispatch])
  return (
    <div className='flex items-center gap-6'>
     <div className='flex items-center bg-gray-200 rounded-full border p-3'>
        <input className='outline-none bg-gray-200 ' type="text" placeholder='Search...' />
        <IoSearch size={28}/>
     </div>
     <FaHeart  size={28}/>
     <div onClick={()=>navigate('cart')} className='relative cursor-pointer'>
<div className='absolute -top-3 -right-3 rounded-full w-5 h-5 bg-red-500 text-white flex justify-center items-center'>{itemCount}</div>
<SlBasket size={28}/>
     </div>
    </div>
  )
}

export default NavbarRight
