import React, { useState } from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

function MUISelect() {
    const [currency,setcurrency]=useState([])
    console.log(currency)
  return (
    <div>
        {/* <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Currency</InputLabel>
            <Select value={currency} onChange={(e)=>setcurrency(e.target.value)}>
                <MenuItem value={"AZN"}> Manat</MenuItem>
                <MenuItem value={'USD'}>Dollar</MenuItem>
                <MenuItem value={"EUR"}>Avro</MenuItem>

            </Select>
        </FormControl> */}
        <TextField
        SelectProps={{multiple:true}}
        value={currency}
onChange={(e)=>setcurrency(e.target.value)}        sx={{width:"130px"}}
        label='Currency' select>
 <MenuItem value={"AZN"}> Manat</MenuItem>
                <MenuItem value={'USD'}>Dollar</MenuItem>
                <MenuItem value={"EUR"}>Avro</MenuItem>
        </TextField>
      
    </div>
  )
}

export default MUISelect
