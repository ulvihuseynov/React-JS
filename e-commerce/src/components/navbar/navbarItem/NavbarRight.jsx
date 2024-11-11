import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const NavbarRight = () => {
  return (
    <div className='flex items-center gap-6'>
     <div className='flex items-center bg-gray-200 rounded-full border p-3'>
        <input className='outline-none bg-gray-200 ' type="text" placeholder='Search...' />
        <IoSearch size={28}/>
     </div>
     <FaHeart  size={28}/>
     <div className='relative'>
<div className='absolute -top-3 -right-3 rounded-full w-5 h-5 bg-red-500 text-white flex justify-center items-center'>3</div>
<SlBasket size={28}/>
     </div>
    </div>
  )
}

export default NavbarRight
