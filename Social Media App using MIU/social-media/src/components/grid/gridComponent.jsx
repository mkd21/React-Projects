import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid2';

import PostCardList from "../postCardList/postcardList.jsx";

import UserList from "../user list/userList.jsx";

export default function grid() {

  return (
    <Box sx={{ flexGrow: 1 }}>

      <Grid display = "flex" justifyContent= "center" spacing={2} style = {{border: "1px solid black"}} >

        <Grid size={{ xs : 1 , sm : 3 , md : 3 }} sx = {{mr : 9 , position : "sticky" , top : "3px"}}  >
          <UserList />
        </Grid>

        <Grid size = {{xs : 4}} sx={{width : 345}} >
          <PostCardList  />
        </Grid>

      </Grid>

    </Box>
  );
}