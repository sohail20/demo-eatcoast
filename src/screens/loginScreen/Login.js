import React, { useState } from 'react'
import { AppBar, Button, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        loginField: {
            main: '#E1E1E',
        },
        loginField2: {
            main: '#E1E1E',
        },

    },

});

const stylestf = {
    marginBottom: 3,
    width: '100%', background: '#F6F6F6', height: '40px',
    border: '1px solid #E1E1E6', borderRadius: '6px',
    textColor: 'black','&:hover': {color: '#F6F6F6'}
};



export const Login = () => {
    const [setEmail] = useState('');
    const [setPassword] = useState('');
    return (
        <>

            <AppBar style={{ backgroundColor: 'white', boxShadow: 'none', height: '120px' }}>
                <Box textAlign={'center'}>
                    <Typography variant='p' sx={{
                        color: '#0e0588',
                        padding: '0px',
                        fontSize: '35px',
                        fontWeight: '650',

                    }} >e</Typography>
                    <Typography variant='p' sx={{
                        color: '#69BFB9',
                        padding: '0px',
                        fontSize: '35px',
                        fontWeight: '650'
                    }}>atcost</Typography>
                </Box>
                <Typography style={{
                    fontFamily: 'Outfit', fontWeight: 400, textAlign: 'center', letterSpacing: 2
                    , fontSize: 12, marginTop: -8, color: '#223B7B'
                }} >
                    CATERER APP
                </Typography>

            </AppBar>

            {/* login form  */}

            <Grid container spacing={0} direction="column" alignItems='center' justifyContent="center"
                style={{ minheight: '100vh' }}>
                <Grid item xs={12} sx={{ marginTop: '120px' }} >
                    <Box sx={{
                        maxWidth: '450px', alignItems: 'center',
                        backgroundColor: 'transparent', height: 'auto'
                    }}>
                        <Box sx={{ py: 3, px: 5 }}>

                            <form >
                                <ThemeProvider theme={theme}>
                                    <TextField id="outlined-basic"
                                        sx={stylestf} color={'loginField'}
                                        label="Email"
                                        defaultValue=""
                                        size="small"
                                        type="email" autoFocus={true} onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <TextField
                                        sx={stylestf} color={'loginField2'}
                                        label="password" id="outlined-size-small"
                                        size="small"
                                        type="password" onChange={(e) => setPassword(e.target.value)}
                                    />

                                        <Link to={'/forgotpass'} >
                                    <Typography sx={{ marginBottom: 2, marginTop: -1, paddingLeft: 1 }}>
                                            <span style={{ color: '#2B817B', fontFamily: 'Outfit', textDecorationLine: 'underline' }}>
                                            Forgot Password ? </span>
                                    </Typography>
                                            </Link>


                                    <Link to={'/operators'}>
                                    <Button
                                        style={{ border: 2, textTransform: 'none', background: '#2B817B', width: '100%', color: 'white' }}
                                    >
                                            <span style={{ color: '#FFFFFF', fontFamily: 'Outfit' }}>Login</span>
                                    </Button>
                                        </Link>
                                </ThemeProvider>
                            </form>
                            <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} >
                                    <span style={{ color: '#2B817B', fontFamily: 'Outfit' }}>Don't have an account ?</span>{' '}
                                <Link to={'/stepper'} >
                                    <span style={{ color: '#2B817B', fontFamily: 'Outfit', textDecorationLine: 'underline' }}>
                                        Register </span></Link>
                            </Typography>
                            
                            <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} >
                                    <span style={{ color: '#2B817B', fontFamily: 'Outfit' }}>Rough work only</span>{' '}
                                <Link to={'/dashboard'} >
                                    <span style={{ color: '#2B817B', fontFamily: 'Outfit', textDecorationLine: 'underline' }}>
                                        Dashboard </span></Link>
                            </Typography>

                        </Box>
                    </Box>
                </Grid>


            </Grid>




        </>
    )
}
