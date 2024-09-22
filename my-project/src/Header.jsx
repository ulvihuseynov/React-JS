import React from 'react'

function Header() {
  return (
    <header className="flex justify-between items-center h-24 container mx-auto ">
    <div><img className='w-28 h-28' src="https://png.pngtree.com/png-vector/20221020/ourmid/pngtree-online-course-banner-sticker-png-image_6356847.png" alt="" /></div>
    <div>
      <ul className="flex gap-8 text-xl">
        <li><a  href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Courses</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
    <div className='text-xl flex gap-4'>
      <button className='border-2 border-black py-1 px-4 rounded-lg'>Login</button>
      <button className='border-2 border-black py-1 px-4 rounded-lg'>Sign</button>
    </div>
   </header>
  )
}

export default Header
