import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
function MUITextField() {
  return (
    <div>
         <TextField id="outlined-basic" label="Outlined" variant="outlined" color='error' disabled/>
         <TextField id="filled-basic" label="Filled" variant="filled" helperText="Adini yaz" InputProps={{readonly:true}}
         slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
            },
          }}/>
         <TextField id="standard-basic"  variant="standard" value={'ulvi'} />

         <TextField id="standard-basic" label="Standard" variant="standard" color='success' />

         <div>
            <TextField
            InputProps={{
                startAdornment:<InputAdornment><PersonIcon/></InputAdornment>
            }}
            variant='outlined' label="Name"></TextField>
         </div>
         <div>
            <TextField
            fullWidth
            size='small'
            InputProps={{
                endAdornment:<InputAdornment><PersonIcon/></InputAdornment>
            }}
            variant='outlined' label="Name"></TextField>
         </div>
    </div>
  )
}

export default MUITextField
