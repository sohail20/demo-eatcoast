import { Box, Container, FormControl, Grid,  InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

export const Ownerinfo = ({ formik, handleStepper }) => {
    console.log(formik.values)
    const [code, setCode] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <Container maxWidth='xs' sx={{ backgroundColor: '', height: '50vh' }}>

            <br />
            <Box >
                <TextField sx={{
                    marginBottom: 3,
                    background: '#F6F6F6', height: '40px',
                    border: '1px solid #E1E1E6', borderRadius: '6px'
                }}
                    fullWidth size='small'
                    id="IDCardNum"
                    name="IDCardNum"
                    label="ID Card Num"
                    value={formik.values.IDCardNum}
                    onChange={formik.handleChange}

                />
                <TextField sx={{
                    marginBottom: 3,
                    background: '#F6F6F6', height: '40px',
                    border: '1px solid #E1E1E6', borderRadius: '6px'
                }}
                    fullWidth size='small'
                    id="OwnerName"
                    name="OwnerName"
                    label="Owner Name"
                    type="text"
                    value={formik.values.OwnerName}
                    onChange={formik.handleChange}

                />
                <TextField sx={{
                    marginBottom: 3,
                    background: '#F6F6F6', height: '40px',
                    border: '1px solid #E1E1E6', borderRadius: '6px'
                }}
                    fullWidth size='small'
                    id="EmailAddress"
                    name="EmailAddress"
                    label="Email Address"
                    type="text"
                    value={formik.values.EmailAddress}
                    onChange={formik.handleChange}
                />
                <Box >
                   <Grid container spacing={1}>
                       <Grid item xs={3}>
                            <FormControl size='small' sx={{
                                marginBottom: 3, width: '100%',
                                background: '#F6F6F6', height: '40px',
                                border: '1px solid #E1E1E6', borderRadius: '6px' }}>
                                <InputLabel id="demo-controlled-open-select-label">Phone </InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    value={code}
                                    label="Phone"
                                    onChange={handleChange}
                                >
                                    <MenuItem selected value="+1">
                                                +1
                                    </MenuItem>
                                    <MenuItem value={+2}>+2</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>


                       </Grid>
                       <Grid item xs={5}>
                            <TextField sx={{
                                marginBottom: 3,
                                background: '#F6F6F6', height: '40px',
                                border: '1px solid #E1E1E6', borderRadius: '6px'
                            }}
                                fullWidth size='small'
                                id="phoneCode"
                                name="phoneCode"
                                label="Phone Number"
                                value={formik.values.phoneCode}
                                onChange={formik.handleChange}
                            />
                       </Grid>
                       <Grid item xs={4}>
                            <TextField sx={{
                                marginBottom: 3,
                                background: '#F6F6F6', height: '40px',
                                border: '1px solid #E1E1E6', borderRadius: '6px'
                            }}
                                fullWidth size='small'
                                id="setPin"
                                name="setPin"
                                label="setPin"
                                value={formik.values.setPin}
                                onChange={formik.handleChange}

                            />

                       </Grid>
                       </Grid> 
                    
                </Box>


            </Box>


        </Container>
    )
}
