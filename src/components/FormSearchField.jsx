import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
  import SearchIcon from '@mui/icons-material/Search';

export default function FormSearchField() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 150, height: '30px', backgroundColor: 'white', border: '1px solid #dbdbdb', boxShadow: 'none !important' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{color: '#dbdbdb'}}/>
      </IconButton>
    </Paper>
  );
}