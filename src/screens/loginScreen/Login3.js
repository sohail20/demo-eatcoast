import React, { useState, useEffect } from 'react'
import { Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material'
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
const DecreaaseonMobile = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('dm')]: {
        fontSize: '20px'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px'
    }
}));

export const Login3 = () => {
    const [pinOne, setPinOne] = useState([])

    const pinsubmitHandler = (e) => {
        e.preventDefault();
        console.log('submit handler')
    }
    const pincHandler = (value) => {
        setPinOne([...pinOne, value])
    }
    const handleCropArray = ()=>{
       
        // setPinOne(pincHandler(null))
    }



    return (
        <>
            <Grid container spacing={0} sx={{}}>
                <Grid item xs={12} sx={{ padding: 2 }} >
                    <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                        <Box >
                            <Typography variant='h4' component='div' sx={{
                                marginLeft: 9, color: "#1A1824", fontWeight: '600', fontFamily: 'Outfit', fontSize: '24px'
                            }} >
                                Enter Pin
                            </Typography>
                            <DecreaaseonMobile>
                                <Typography variant='body2' component='div' sx={{ color: "#9EA3AE", fontFamily: 'Outfit', fontWeight: '400', fontSize: '20px' }} >
                                    Please enter your 4 digit PIN.
                                </Typography>
                            </DecreaaseonMobile>
                        </Box>
                    </Box>
                    <Box>
                        <Button sx={{ position: 'absolute', content: '""', marginTop: '-40px', maxWidth: 3 }}>
                            <i className="fa-solid fa-angle-left" style={{ fontSize: '20px', color: '#1A1824' }}></i>
                        </Button>
                    </Box>
                </Grid>
                <Container maxWidth='md'>
                    <Box sx={{
                        padding: 2, height: '92px', display: 'flex', justifyContent: 'center'
                        , '& .MuiTextField-root': {

                        },

                    }}>
                        <TextField sx={{ width: '82px', height: '100px', paddingLeft: '0px' }}
                            id="outlined-basic" label="" value={pinOne[0]} variant="outlined"  type="password"  />
                        <Box sx={{ position: 'relative', width: '30px', height: '55px' }}>

                            <Box sx={{ position: 'absolute', content: '""', width: '25px', border: '2px solid #E1E1E6', marginTop: '27.5px', marginLeft: '2px' }}>
                            </Box>
                        </Box>
                        <TextField sx={{ width: '82px', height: '100px', paddingLeft: '0px' }}
                            id="outlined-basic" label="" value={pinOne[1]} variant="outlined" type="number" />
                        <Box sx={{ position: 'relative', width: '30px', height: '55px' }}>
                            <Box sx={{ position: 'absolute', content: '""', width: '25px', border: '2px solid #E1E1E6', marginTop: '27.5px', marginLeft: '2px' }}>
                            </Box>
                        </Box>
                        <TextField sx={{ width: '82px', height: '100px', paddingLeft: '0px' }}
                            id="outlined-basic" label="" value={pinOne[2]} variant="outlined" />
                        <Box sx={{ position: 'relative', width: '30px', height: '55px' }}>
                            <Box sx={{ position: 'absolute', content: '""', width: '25px', border: '2px solid #E1E1E6', marginTop: '27.5px', marginLeft: '2px' }}>
                            </Box>
                        </Box>
                        <TextField sx={{ width: '82px', height: '100px', paddingLeft: '0px' }}
                            id="outlined-basic" label="" value={pinOne[3]} variant="outlined" />
                    </Box>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} >
                        <Link to={'#'} >
                            <span style={{ color: '#2B817B', fontFamily: 'Outfit', textDecorationLine: 'underline', fontSize: '16px', }}> Forgot Pin ?</span>{' '}
                        </Link>
                    </Typography>


                    {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>  */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
                        <Button onClick={(e) => pincHandler(e.target.value)} value='1' name="pin1"
                            sx={{ width: '130px', height: '90px', marginRight: 2, marginBottom: 1 }} variant="outlined" disableRipple={true}>
                            1   </Button>

                        <Button onClick={(e) => pincHandler(e.target.value)} value='2' sx={{ width: '130px', height: '90px', marginRight: 2 }} variant="outlined" disableRipple={true}>2</Button>
                        <Button onClick={(e) => pincHandler(e.target.value)} value='3' sx={{ width: '130px', height: '90px', marginRight: 2 }} variant="outlined" disableRipple={true}>3</Button>

                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="outlined" onClick={(e) => pincHandler(e.target.value)} value='4' sx={{ width: '130px', height: '90px', marginRight: 2, marginBottom: 1 }} disableRipple={true}>4</Button>
                        <Button variant="outlined" onClick={(e) => pincHandler(e.target.value)} value='5' sx={{ width: '130px', height: '90px', marginRight: 2 }} disableRipple={true}>5</Button>
                        <Button variant="outlined" onClick={(e) => pincHandler(e.target.value)} value='6' sx={{ width: '130px', height: '90px', marginRight: 2 }} disableRipple={true}>6</Button>

                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="outlined" onClick={(e) => pincHandler(e.target.value)} value='7' sx={{ width: '130px', height: '90px', marginRight: 2, marginBottom: 1 }} disableRipple={true}>7</Button>
                        <Button variant="outlined" onClick={(e) => pincHandler(e.target.value)} value='8' sx={{ width: '130px', height: '90px', marginRight: 2 }} disableRipple={true}>8</Button>
                        <Button variant="outlined" onClick={(e) => pincHandler(e.target.value)} value='9' sx={{ width: '130px', height: '90px', marginRight: 2 }} disableRipple={true}>9</Button>

                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={()=>{handleCropArray(pinOne)}} variant="outlined" sx={{ width: '130px', height: '90px', marginRight: 2, marginBottom: 1 }} disableRipple={true}>
                            <i className="fa-solid fa-delete-left" style={{ color: '#9EA3AE', fontSize: '20px' }}></i>
                        </Button>
                        <Button variant="outlined" onClick={(e) => pincHandler(e.target.value)} value='0' sx={{ width: '130px', height: '90px', marginRight: 2 }} disableRipple={true}>0</Button>
                            <Link to={'/forgotpass'}>
                        <Button variant="outlined" sx={{ width: '130px', height: '90px', marginRight: 2 }} disableRipple={true}>

                            <i className="fa-solid fa-circle-check" style={{ color: '#42C677', fontSize: '20px' }} ></i>
                        </Button>
                            </Link>

                    </Box>
                    {/* </Box> */}
                </Container>
            </Grid>
        </>
    )
}