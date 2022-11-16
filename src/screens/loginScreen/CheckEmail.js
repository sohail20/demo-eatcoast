import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const CheckEmail = () => {


    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box sx={{ mt: 4 }} >
                <Typography variant='h4' textAlign='center' component='div' sx={{
                    color: "#1A1824", fontWeight: '600', fontFamily: 'Outfit', fontSize: '24px'
                }} >
                    Check Your Email
                </Typography>
            </Box>

            <Button sx={{ position: 'absolute', content: '""', marginTop: '40px', }} disableRipple={true}>
                <i className="fa-solid fa-angle-left" style={{ fontSize: '20px', color: '#1A1824' }}></i>
            </Button>

            
           <Box sx={{flexGrow: 1}}> 
            <Grid container spacing={0} direction="column" alignItems='center' justifyContent="center"
                >
                <Grid item xs={12} sx={{ marginTop: '80px' }} >
                    <Box textAlign='center' >
                        <img alt="" style={{width: '112px', height: '112px'}} src='../images/chekEmail1083.png' />
                    </Box>

                    <Typography variant='body2' textAlign='center' component={'div'} 
                        sx={{ color: "545359", marginTop:'24px' , fontFamily: 'Outfit', fontWeight: '400', fontSize: '16px' }}>
                            We have sent a password recover instruction <br/>to your email 
                        </Typography>
                    <Button  disableRipple={true}
                        style={{ border: 2, background: '#2B817B', width: '100%', color: 'white', marginTop: '20px' }}
                    >
                        <Link to={'#'} sx={{borderBottom: '0px solid transparent'}}>

                            <span style={{ color: '#FFFFFF', fontFamily: 'Outfit', fontSize: '16px' }}>Open email app</span>
                        </Link>
                    </Button>

                        <Typography variant='body2' component={'div'} textAlign='center' sx={{ fontFamily: 'Outfit', fontsize: '16px', marginTop:'20px' , color: '#2B817B'}}>
                        Skip, i’ll confirm later
                         </Typography>
                    
                </Grid>
            </Grid>
                </Box>
                <Box sx={{margin: '30px'}}>
                <Typography textAlign="center" variant='body1' component={'div'} sx={{ color: "545359", fontFamily: 'Outfit', fontWeight: '400', fontSize: '16px', marginBottom:'10px' }}>
                             Did not recieve the email ? Check your spam filter
                        </Typography>
                <Typography variant='body2' textAlign="center" component={'div'} sx={{ letterSpacing: '1px', fontsize: '16px', fontFamily: 'Outfit', color: '#2B817B' }}>
                                     Try another email address
                            </Typography>
                            
                             </Box>

        </div>
    )
}
