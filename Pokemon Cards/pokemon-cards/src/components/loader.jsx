import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', marginTop : "15%" , marginLeft : "47%"}}>
      <CircularProgress sx={{color : "black"}}/>
    </Box>
  );
}
