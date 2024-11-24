import React from 'react'
import { Outlet ,Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
  <div style={{display:'flex',gap:'30px'}}>
  <Link className='link' to='personal'>Personal</Link>
  <Link className='link' to='company'>Company</Link>
  </div>

      <Outlet/>
    </div>
  )
}

export default About
