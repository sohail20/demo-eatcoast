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
            <Box mt={4}>
                <label style={{
                    fontSize: '14px',
                    fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824'
                }}>ID Card Number</label>
                <TextField sx={{
                    mt: 1, mb: 2,
                    '&:focus': { borderRadius: '6px', border: '1px solid #E1E1E6' },
                    background: '#F6F6F6', height: '40px',
                    border: '1px solid #E1E1E6', borderRadius: '6px'
                }}
                    fullWidth size='small'
                    id="IDCardNum"
                    name="IDCardNum"
                    placeholder="id Card Number"
                    value={formik.values.IDCardNum}
                    onChange={formik.handleChange}

                />
                <label style={{
                    fontSize: '14px',
                    fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824'
                }}>Owner Name</label>
                <TextField sx={{
                    mt: 1, mb: 2,
                    '&:focus': { borderRadius: '6px', border: '1px solid #E1E1E6' },
                    background: '#F6F6F6', height: '40px',
                    border: '1px solid #E1E1E6', borderRadius: '6px'
                }}
                    fullWidth size='small'
                    id="OwnerName"
                    name="OwnerName"
                    placeholder='Owner Name'
                    type="text"
                    value={formik.values.OwnerName}
                    onChange={formik.handleChange}

                />
                <label style={{
                    fontSize: '14px',
                    fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824'
                }}>Email Address</label>
                <TextField sx={{
                    mt: 1, mb: 2,
                    '&:focus': { borderRadius: '6px', border: '1px solid #E1E1E6' },
                    background: '#F6F6F6', height: '40px',
                    border: '1px solid #E1E1E6', borderRadius: '6px'
                }}
                    fullWidth size='small'
                    id="EmailAddress"
                    name="EmailAddress"
                    placeholder="Email Address"
                    type="text"
                    value={formik.values.EmailAddress}
                    onChange={formik.handleChange}
                />
                <Box >
                   <Grid container spacing={1}>
                       <Grid item xs={3}>
                            <label style={{
                                fontSize: '14px',
                                fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824'
                            }}>Phone Number</label>
                           
                            <FormControl size='small' sx={{
                                mt: 1, mb: 2, '&:focus': { borderRadius: '6px', border: '1px solid #E1E1E6' },
                                 width: '100%',
                                background: '#F6F6F6', height: '40px',
                                border: '1px solid #E1E1E6', borderRadius: '6px' }}>
                                <InputLabel id="demo-controlled-open-select-label"></InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    placeholder='+1'
                                    value={code}
                                    onChange={handleChange}
                                >
                                    <MenuItem selected value="+1">
                                                +1
                                    </MenuItem>
                                    <MenuItem value={+2}>+2</MenuItem>
                                    <MenuItem value={+3}>+3</MenuItem>
                                    <MenuItem value={+4}>+4</MenuItem>
                                </Select>
                            </FormControl>


                       </Grid>
                       <Grid item xs={5}>
                            <label style={{
                                fontSize: '14px',
                              color: '#fff', fontFamily: 'Outfit', fontWeight: '600',
                            }}>hidden</label>
                            <TextField sx={{
                                mt: 1, mb: 2,
                                background: '#F6F6F6', height: '40px',
                                border: '1px solid #E1E1E6', borderRadius: '6px'
                            }}
                                fullWidth size='small'
                                id="phoneCode"
                                name="phoneCode"
                                placeholder="xxxx-xxxx-xxxx"
                                value={formik.values.phoneCode}
                                onChange={formik.handleChange}
                            />
                       </Grid>
                       <Grid item xs={4}>
                            <label style={{
                                fontSize: '14px',
                                fontFamily: 'Outfit', fontWeight: '600', color: '#1A1824'
                            }}>Set Pin</label>
                            <TextField sx={{
                                mt: 1, mb: 2,
                                '&:focus': { borderRadius: '6px', border: '1px solid #E1E1E6' },
                                marginBottom: 3,
                                background: '#F6F6F6', height: '40px',
                                border: '1px solid #E1E1E6', borderRadius: '6px'
                            }}
                                fullWidth size='small'
                                id="setPin"
                                name="setPin"
                                placeholder="xxxxx"
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
