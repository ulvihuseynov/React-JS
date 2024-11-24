import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <nav style={{display:'flex',gap:'40px',fontSize:'20px',backgroundColor:'black',height:"70px",alignItems:"center",paddingLeft:"10px"}}>
     <Link style={{textDecoration:"none" ,color:"white"}} to="/">Home</Link>
     <Link style={{textDecoration:"none" ,color:"white"}}  to="/about">About</Link>
     <Link  style={{textDecoration:"none" ,color:"white"}}  to="/contact">Contact</Link>
     <Link style={{textDecoration:"none" ,color:"white"}} to="/product">Product</Link>

      </nav>
    </div>
  )
}

export default Header
