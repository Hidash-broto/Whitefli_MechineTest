import { Container, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import style from '../style'
import FormSearchField from './FormSearchField'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';

function FormContainer1() {
   return (
      <Container sx={style.formContainer1}>
         <Stack sx={style.containerStack} direction='row' spacing={0.5}>
            <Typography sx={style.container1Font} >Advance Number</Typography>
            <FormSearchField />
         </Stack>

         <Stack sx={style.containerStack} direction='row' spacing={1}>
            <Typography sx={style.container1Font} >Return No</Typography>
            <TextField sx={{ width: 150 }} size='small' id="outlined-basic" variant="outlined" />
         </Stack>

         <Stack sx={style.containerStack} direction='row' spacing={1}>
            <Typography sx={style.container1Font} >Return Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DemoContainer components={['DatePicker']}>
                  <DatePicker sx={{ width: 150}} slotProps={{ textField: { size: 'small' } }} />
               </DemoContainer>
            </LocalizationProvider>
         </Stack>

         <Stack sx={style.containerStack} direction='row' spacing={0.5}>
            <Typography sx={style.container1Font} >Customer Name</Typography>
            <TextField sx={{ width: 150 }} size='small' id="outlined-basic" variant="outlined" />
            <Stack direction='column' >
               <IconButton type="button" sx={{ p: '0px' }} aria-label="search">
                  <SearchIcon sx={{ color: '#dbdbdb' }} />
               </IconButton>
               <InfoIcon sx={{ color: '#dbdbdb' }} />
            </Stack>
         </Stack>

         <Stack sx={style.containerStack} direction='row' spacing={2.1}>
            <Typography sx={style.container1Font} >Salesman Code</Typography>
            <TextField
               id="outlined-select-currency"
               select
               defaultValue="EUR"
               sx={{ width: 150 }}
               size='small'
            />
         </Stack>

         <Stack sx={style.containerStack} direction='row' spacing={3}>
            <Typography sx={style.container1Font} >Manager</Typography>
            <TextField
               id="outlined-select-currency"
               select
               defaultValue="EUR"
               sx={{ width: 150 }}
               size='small'
            />
         </Stack>

         <Stack sx={style.containerStack} direction='row' spacing={1}>
            <Typography sx={style.container1Font} >Adv Amount</Typography>
            <TextField sx={{ width: 150 }} size='small' id="outlined-basic" variant="outlined" />
         </Stack>
      </Container>
   )
}

export default FormContainer1
