import React from 'react'
import {Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
function MUIButton() {
  return (
    <div>
    <div style={{marginBottom:"20px"}}>
    <Button variant='text'>Submit</Button>
    <Button variant='outlined'>Submit</Button>
    <Button variant='contained'>Submit</Button>
    </div>
    <div style={{padding:"20px",display:'flex',gap:'20px'}}>
    <Button variant='contained' color='success'>Submit</Button>
    <Button variant='contained' color='error'>Submit</Button>
    <Button variant='contained' color='inherit'>Submit</Button>
    <Button variant='contained' color='warning'>Submit</Button>
    <Button variant='contained' color='primary'>Submit</Button>

   
    </div>
    <div style={{padding:"20px",display:'flex',gap:'20px'}}>
    <Button
    style={{padding:'20px'}}
edge="end"
    size='small' color='info' variant='contained'>Save</Button>
  
    <Button
     sx={{fontSize:'20px',backgroundColor:"green"}}
    size='medium' color='info' variant='contained'>Save</Button>
    <Button size='large' color='info' variant='contained'>Save</Button>
   
    </div>
    <div style={{padding:"20px",display:'flex',gap:'20px'}}>
    <Button
    startIcon={<AddIcon />}
     size='small'
      color='info' 
      variant='contained'>Save</Button>
  
    <Button 
    disabled size='medium' color='info' variant='contained'>Save</Button>
    <Button size='large' color='error' variant='contained'
    endIcon={<DeleteIcon />} >Delete</Button>
   
    </div>
    </div>
  )
}

export default MUIButton
