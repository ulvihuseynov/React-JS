import { Divider, Stack } from '@mui/material'
import React from 'react'

function MUIStack() {
  return (
    <div>
      <Stack direction={{xs:'column', sm:'row'}} spacing={2}
      divider={<Divider orientation='horizontal' flexItem/>}>
      <div style={{width:"300px",height:'100px',backgroundColor:"blue"}}>Item1</div>
      <div style={{width:"300px",height:'100px',backgroundColor:"red"}}>Item2</div>
      <div style={{width:"300px",height:'100px',backgroundColor:"green"}}>Item3</div>
      </Stack>
    </div>
  )
}

export default MUIStack
