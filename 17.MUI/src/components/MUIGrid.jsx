import React from 'react'
import Grid from '@mui/material/Grid2';
import { green, red } from '@mui/material/colors';

function MUIGrid() {
  return (
    <div>
      <Grid container>
<Grid size={{xs:12, sm:6,md:8,lg:9}} color={red}>
    
</Grid>
<Grid size={{xs:12, sm:6,md:4,lg:3}} color={green} >item1</Grid>

      </Grid>
    </div>
  )
}

export default MUIGrid
