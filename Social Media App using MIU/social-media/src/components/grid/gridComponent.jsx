import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

import PostCardList from "../postCardList/postcardList.jsx";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  ...theme.applyStyles('dark', {
  }),
}));

export default function grid() {

  return (
    <Box sx={{ flexGrow: 1 }}>

      <Grid container spacing={2} style = {{border: "1px solid black"}} >

        <Grid size={{ xs : 1 , sm : 3 , md : 4 }} >
          <Item style={{backgroundColor : "yellow"}}> xs=1 sm=3 md=4 </Item >
        </Grid>

        <Grid size={{md : 8 }} sx={{pl : "20%"}} style={{backgroundColor : "orange"}}>
          <PostCardList />
        </Grid>

      </Grid>

    </Box>
  );
}