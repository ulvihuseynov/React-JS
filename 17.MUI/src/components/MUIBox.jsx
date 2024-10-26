import { Box } from '@mui/material'
import React from 'react'

function MUIBox() {
  return (
    <div>
  
  <Box  sx={{border:'1px solid',padding:'20px 10px',width:"150px", height:'150px',backgroundColor:"orange",color:"white",fontSize:"20px",textAlign:'center'}}>
      This Box renders as an HTML section element.
      </Box>
      <Box  sx={{border:'1px solid',padding:'20px 10px',width:"150px", height:'150px',backgroundColor:"orange",color:"white",fontSize:"20px",textAlign:'center',margin:"40px 0"}}>
      This Box renders as an HTML section element.
      </Box>    <Box sx={{border:'1px solid',padding:'20px 10px',width:"150px", height:'150px',backgroundColor:"orange",color:"white",fontSize:"20px",textAlign:'center'}}>
      This Box renders as an HTML section element.
      </Box>
    </div>
  )
}

export default MUIBox
