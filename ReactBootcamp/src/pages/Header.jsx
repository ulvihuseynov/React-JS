import React from 'react'
import { Link,} from 'react-router-dom'


function Header() {
  return (
    <div>
       <header>
    <nav className='nav'>
  
   <Link className='link' to='/'>Home</Link>
   <Link  className='link' to='/about'>About</Link>
   <Link  className='link' to='/team'>Team</Link>
   <Link   className='link' to='/contact'>Contact</Link>
   {/* <Link   className='link' to='*'>Contact</Link> */}

  


    </nav>
  </header>
    </div>
  )
}

export default Header
