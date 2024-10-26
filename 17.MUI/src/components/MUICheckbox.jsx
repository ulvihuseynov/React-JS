import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
function MUICheckbox() {
    const [isConfirm, setIsConfirm]=useState(false)
    console.log(isConfirm)
    const submit=()=>{
        if (!isConfirm) {
            alert("Sozlesmeni tesdqile")
        }else{
            alert("Sozlesmeni tesdqilendi")
        }
    }
  return (
    <div>
       
      {/* <FormControl>
        <FormLabel>Tehsil seviyyesi</FormLabel>
        <FormGroup>
        <FormControlLabel
          value="orta"
          control={<Checkbox />}
          label="bagca"
          labelPlacement="end"
        /> 
          <FormControlLabel
          value="orta"
          control={<Checkbox disabled/>}
          label="mekteb"
          labelPlacement="end"
          
        />    
          <FormControlLabel
          value="orta"
          control={<Checkbox defaultChecked />}
          label="universitet"
          labelPlacement="end"
          
        />         
        </FormGroup>
      </FormControl> */}
        <FormControl>
        {/* <FormLabel>Tehsil seviyyesi</FormLabel> */}
        <FormGroup>
        <FormControlLabel
        //   value="orta"
          control={<Checkbox checked={isConfirm} 
          onChange={(e)=>setIsConfirm(e.target.checked)}/>}
          label="Istifade sertlerini qebul edirem"
          labelPlacement="end"
        /> 
           <Button
           onClick={submit}
            variant='contained'>Formu gonder</Button>
                
        </FormGroup>
      </FormControl>
    </div>
  )
}

export default MUICheckbox
