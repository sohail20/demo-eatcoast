import { AppBar, Box, Card, CardActionArea, CardContent, CardMedia, IconButton, Toolbar, Typography
} from '@mui/material'
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/system';
  
const theme = createTheme({
    palette:{
        primary:{
            main: '#E75C62'
        }
    }
})

const Search = styled('div')(({ theme }) => ({
    
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: (theme.palette.common.black, 0.15),
    // '&:hover': {
    //     backgroundColor: alpha(theme.palette.common.white, 0.25),
    // },
    backgroundColor: 'red',  
    height: '100px',
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.up('xs')]: {
        marginLeft: theme.spacing(-3),
        width: '100%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const RegisHeader =styled(AppBar)(({theme})=>({
padding: theme.spacing(0),
[theme.breakpoints.up('sm')]:{
    height: '130px',
},
[theme.breakpoints.down('sm')]:{
    height: '110px',
}
}))
// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'black',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             width: '12ch',
//             '&:focus': {
//                 width: '20ch',
//             },
//         },
//     },
// }));
export const CaterRegister = () => {
  return (
    <>
          <Box sx={{ flexGrow: 1 }}>
              <RegisHeader position="static" sx={{  justifyContent: 'center',
            // '& MuiPaper-root' :  
        }}>
                  <Toolbar>
                      <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="open drawer"
                          sx={{ mr: 2 }}
                      >
                          <ThemeProvider theme={theme}>
                          <CloseIcon color='primary' />
                          </ThemeProvider>
                      </IconButton>
                      
                      <Search>
                          
                          <Box display={'flex'} flexDirection={'row'} justifyContent='center' alognItems={'center'}>

                              <Box sx={{marginRight: '12px'}}>
                                  <Box display={'flex'} flexDirection={'column'} justifyContent='center' alognItems={'center'}>
                                      
                                      <img
                                            width="70px"
                                          src="./images/MarchantRegis.png"
                                          alt="Marchant Registration"
                                      />
                                         <Typography variant='' 
                                         sx={{fontSize: '12px', fontFamily: 'Outfit', fontWeight: '500', color: '#1A1824' }}
                                          component='div' textAlign={'center'}>
                                                Merchant<br/> Registration
                                         </Typography>
                              </Box>
                              </Box>
                              <Box sx={{ position: 'relative', width: '60px', marginBottom: '50px' }} display={'flex'} alignItems={'center'}>
                              <Box sx={{
                                  position: 'absolute',
                                  content: '""', width: '50px', borderBottom: '3px dashed #E1E1E6 '
                                  , marginTop: '50px',
                                
                                }}>
                              </Box>
                                  </Box>
                              <Box sx={{marginRight: '12px'}}>
                                  <Box display={'flex'} flexDirection={'column'} justifyContent='center' alognItems={'center'}>
                                      
                                      <img
                                            width="70px"
                                          src="./images/OwnerInfo.png"
                                          alt="OwnerInfo"
                                      />
                                         <Typography variant='' 
                                         sx={{fontSize: '12px', fontFamily: 'Outfit', fontWeight: '500', color: '#1A1824' }}
                                          component='div' textAlign={'center'}>
                                                Owner<br/> Information
                                         </Typography>
                              </Box>
                              </Box>
                              <Box sx={{ position: 'relative', width: '60px', marginBottom: '50px' }} display={'flex'} alignItems={'center'}>
                              <Box sx={{
                                  position: 'absolute',
                                  content: '""', width: '50px', borderBottom: '3px dashed #E1E1E6 '
                                  , marginTop: '50px',
                                
                                }}>
                              </Box>
                                  </Box>
                              <Box sx={{marginRight: '12px'}}>
                                  <Box display={'flex'} flexDirection={'column'} justifyContent='center' alognItems={'center'}>
                                      
                                      <img
                                            width="70px"
                                          src="./images/waiting.png"
                                          alt="waiting..."
                                      />
                                         <Typography variant='' 
                                         sx={{fontSize: '12px', fontFamily: 'Outfit', fontWeight: '500', color: '#1A1824' }}
                                          component='div' textAlign={'center'}>
                                                Waiting
                                         </Typography>
                              </Box>
                              </Box>
                              <Box sx={{ position: 'relative', width: '60px', marginBottom: '50px' }} display={'flex'} alignItems={'center'}>
                              <Box sx={{
                                  position: 'absolute',
                                  content: '""', width: '50px', borderBottom: '3px dashed #E1E1E6 '
                                  , marginTop: '50px',
                                
                                }}>
                              </Box>
                                  </Box>
                              <Box sx={{ marginRight: '12px' }}>
                                  <Box display={'flex'} flexDirection={'column'} justifyContent='center' alognItems={'center'}>

                                      <img
                                          width="70px"
                                          src="./images/MarchantRegis.png"
                                          alt="Marchant Registration"
                                      />
                                      <Typography variant=''
                                          sx={{ fontSize: '12px', fontFamily: 'Outfit', fontWeight: '500', color: '#1A1824' }}
                                          component='div' textAlign={'center'}>
                                          Merchant<br /> Registration
                                      </Typography>
                                  </Box>
                              </Box>

                              
                                     
                          </Box>
                      </Search>
                  </Toolbar>
              </RegisHeader>
          </Box>
    
    </>
  )
}
