import { Checkbox, Container, FormControlLabel, Stack, TextField, Typography } from '@mui/material'
import style from '../style'
import React from 'react'

function FormContainer2() {
    return (
        <Container sx={style.formContainer2}>
            <Container sx={style.leftContainer2}>
                <Stack sx={{ mt: 1, width: '100%' }} direction='row' spacing={4}>
                    <FormControlLabel control={<Checkbox />} label="Cash" />
                    <FormControlLabel control={<Checkbox />} label="Cheque" />
                    <FormControlLabel control={<Checkbox />} label="RTGS" />
                </Stack>
                <Stack sx={{ ml: '13px', mt: 2 }} direction='column' spacing={1.5}>
                    <Stack sx={{ alignItems: 'center' }} direction='row' spacing={3.3}>
                        <Typography sx={style.container1Font} >Cash</Typography>
                        <TextField sx={{ width: 250 }} size='small' id="outlined-basic" variant="outlined" />
                    </Stack>
                    <Stack sx={{ alignItems: 'center' }} direction='row' spacing={1}>
                        <Typography sx={style.container1Font} >Cheque</Typography>
                        <TextField sx={{ width: 250 }} size='small' id="outlined-basic" variant="outlined" />
                    </Stack>
                    <Stack sx={{ alignItems: 'center' }} direction='row' spacing={2.3}>
                        <Typography sx={style.container1Font} >RTGS</Typography>
                        <TextField sx={{ width: 250 }} size='small' id="outlined-basic" variant="outlined" />
                    </Stack>
                </Stack>
            </Container>
            <Container sx={style.rightContainer2}>
                <Stack direction='row'>
                    <Stack direction='row' spacing={2}>
                        <Typography sx={{ mt: 1 }}>Notes</Typography>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={3}
                            sx={{ width: 200 }}
                        />
                    </Stack>
                    <Stack sx={{ ml: '46px' }} direction='column' spacing={1.5}>
                    <Stack sx={{ alignItems: 'center' }} direction='row' spacing={2.5}>
                        <Typography sx={style.container1Font} >Advance Amount</Typography>
                        <TextField sx={{ width: 180 }} size='small' id="outlined-basic" variant="outlined" />
                    </Stack>
                    <Stack sx={{ alignItems: 'center' }} direction='row' spacing={5.8}>
                        <Typography sx={style.container1Font} >Less Amount</Typography>
                        <TextField sx={{ width: 180 }} size='small' id="outlined-basic" variant="outlined" />
                    </Stack>
                    <Stack sx={{ alignItems: 'center' }} direction='row' spacing={5.8}>
                        <Typography sx={style.container1Font} >Paid Amount</Typography>
                        <TextField sx={{ width: 180 }} size='small' id="outlined-basic" variant="outlined" />
                    </Stack>
                    <Stack sx={{ alignItems: 'center' }} direction='row' spacing={3.5}>
                        <Typography sx={style.container1Font} >Unpaid Amount</Typography>
                        <TextField sx={{ width: 180 }} size='small' id="outlined-basic" variant="outlined" />
                    </Stack>
                </Stack>
                </Stack>
            </Container>
        </Container>
    )
}

export default FormContainer2
