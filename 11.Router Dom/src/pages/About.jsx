import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link style={{marginRight:"40px"}} to='employee' >Calisanlar </Link>
      <Link to='company' >Sirket </Link>
<Outlet />
    </div>
  )
}

export default About
