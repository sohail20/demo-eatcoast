import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const ForgotPin = () => {
    const [ setEmail] = useState('');
    // const [password, setPassword] = useState('');    
    
    
    
    return (
        <>
            <Box sx={{ mt: 4 }} >
                <Typography variant='h4' textAlign='center' component='div' sx={{
                    color: "#1A1824", fontWeight: '600', fontFamily: 'Outfit', fontSize: '24px'
                }} >
                     Forgot Pin 
                </Typography>
                <Typography textAlign='center' variant='body2' component='div' sx={{ color: "#9EA3AE", fontFamily: 'Outfit', fontWeight: '400', fontSize: '20px' }} >
                    Enter your account and we will send instructions
                </Typography>
            </Box>
            <Link to="/signinPin">   
            <Button sx={{ position: 'absolute', content: '""', marginTop: '-40px',  }} disableRipple={true}>
                <i className="fa-solid fa-angle-left" style={{ fontSize: '20px', color: '#1A1824' }}></i>
            </Button>
            </Link>
            <Grid container spacing={0} direction="column" alignItems='center' justifyContent="center"
                style={{ minheight: '100vh' }}>
                <Grid item xs={12} sx={{ marginTop: '80px' }} >
                    <Box sx={{
                        maxWidth: '450px', alignItems: 'center',
                        backgroundColor: 'transparent', height: 'auto'
                    }}>
                        <Box sx={{ py: 3, px: 5 }}>

                            <form >


                                <TextField
                                    sx={{
                                        marginBottom: 3,
                                        width: '100%', background: '#F6F6F6', height: '40px',
                                        border: '1px solid #E1E1E6', borderRadius: '6px'
                                    }}
                                    label="Email"
                                    defaultValue=""
                                    size="small"
                                    type="email" autoFocus={true} onChange={(e) => setEmail(e.target.value)}
                                />

                               
                                <Link to={'/checkemail'}>
                                <Button disableRipple={true}
                                    style={{ border: 2, background: '#2B817B', width: '100%', color: 'white' }}
                                    >

                                        <span style={{ color: '#FFFFFF', fontFamily: 'Outfit', fontSize: '16px'}}>Send Email</span>
                                </Button>
                                    </Link>

                            </form>
                           

                        </Box>
                    </Box>
                </Grid>


            </Grid>

 
 
        </>
    )
}
