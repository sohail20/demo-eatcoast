import React, { useState } from 'react'
import { AppBar, Button,  Grid, TextField,  Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { ThemeProvider , createTheme } from '@mui/material/styles'

 const theme = createTheme({
    palette: {
        loginField: {
            main: '#E1E1E',
        },
        loginField2: {
            main: '#F6F6F6',
        },

    },

});

const stylestf ={
    marginBottom: 3,
    width: '100%', background: '#F6F6F6', height: '40px',
    border: '1px solid #E1E1E6', borderRadius: '6px',
    textColor: 'black',
};



export const Login = () => {
    const [ setEmail] = useState('');
    const [ setPassword] = useState('');    
    return (
        <>
        
   <AppBar   style={{ backgroundColor: 'white', boxShadow: 'none',height: '120px' }}>
            <Typography  style={{display: 'flex', justifyContent: 'center'}}>
              <Link  to={"/"}>
                      <span sx={{
                            color: '#0e0588',
                            padding: '0px',
                            fontSize: '35px',
                        fontWeight: '650',
  
                      }} >e</span>
                        <span sx={{
                            color: '#69BFB9',
                            padding: '0px',
                            fontSize: '35px',
                        fontWeight: '650' }}>atcost</span>
                <Typography style={{ fontFamily: 'Outfit', fontWeight: 400, textAlign: 'center', letterSpacing: 2
            , fontSize: 12, marginTop: 14, color: '#223B7B'  }} > 
                    CATERER APP
                </Typography>
              </Link>
                </Typography>
                
                   </AppBar>

                {/* login form  */}
                 
                  <Grid container spacing={0} direction="column" alignItems='center'  justifyContent="center"
                  style={{minheight: '100vh'}}>
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
                                        type="password"  onChange={(e) => setPassword(e.target.value)}
                                          />
                                    
                                    <Typography sx={{  marginBottom: 2, marginTop:-1 , paddingLeft: 1  }}>
                                        <Link to={'#'} ><span style={{ color: '#2B817B', fontFamily: 'Outfit', textDecorationLine:'underline'  }}>
                                             Forgot Password ? </span></Link>
                                            </Typography>                                  
                                    
                                    
                                    <Button 
                                    style={{ border: 2, textTransform: 'none' ,background: '#2B817B', width: '100%', color: 'white' }}
                                          type="submit">
                                        <Link to={'/dashboard'}>
                                          <span style={{color: '#FFFFFF', fontFamily: 'Outfit'}}>Login</span>
                                          </Link>  
                                          </Button>
                                </ThemeProvider>
                                  </form>
                                            <Typography sx={{display: 'flex', justifyContent: 'center', mt:3}} >
                                <Link to={'/stepper'} >
                                        <span style={{ color: '#1A1824', fontFamily: 'Outfit' }}>Don't have an account ?</span>{' '}
                                        <span style={{ color: '#2B817B', fontFamily: 'Outfit', textDecorationLine: 'underline' }}>
                                        Register </span></Link>
                                        </Typography>
                              </Box>
                          </Box>
                      </Grid>


                  </Grid>




   </>
  )
}
