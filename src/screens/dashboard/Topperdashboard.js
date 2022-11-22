import { AppBar, Menu, Box, Button, MenuItem, Toolbar, Typography, Badge, Drawer } from '@mui/material'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BsFillBellFill, BsCheckCircleFill } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const theme = createTheme({
  palette: {
    appbar: {
      main: '#fff',
    },
    loginField2: {
      main: '#F6F6F6',
    },
    loginOption: {
      main: '#fff'
    }
  },
});
const dashAppbar = {
  boxShadow: 'none', height:{xs: '170px', md: '70px'},
  borderBottom: '1px solid #E1E1E6',
  paddingLeft: '90px', paddingRight: '30px',
  paddingTop: { xs: '15px', md: '20px',  lg:'20px'},
   paddingBottom: '20px', alignItems:{ xs: 'center', md: 'none'}
  , display: 'flex', justifyContent: 'space-between', flexDirection: {xs:'column', md:'row'}
}

const typo14px = {
  fontFamily: 'Outfit',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#545359',
}
const ctypo12px = {
  fontFamily: 'Outfit',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '12px',
  color: '#545359',
}
const typo12px = {
  fontFamily: 'Outfit',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '12px',
  color: '#2B817B',
}

// -------login button 
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    width: 110,
    color:
      theme.palette.mode === 'light' ? '#545359' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '2px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1),

      },
      '&:active': {
        backgroundColor: "#fff",
      },
    },
  },
}));


const todayDate = () => {
  let currentDate = '';
  let setTodatDate = '';
  const daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthName = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  currentDate = new Date();
  let now = currentDate.getDay();
  let nameofDay = daysName[now];
  let todayDate = currentDate.getDate();
  let currentMonth = currentDate.getMonth();
  let Month = monthName[currentMonth];
  let fullYear = currentDate.getFullYear();
  return setTodatDate = `${nameofDay},${todayDate} ${Month},${fullYear}`;
}
const Topperdashboard = () => {

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open1, setOpen1] = React.useState(true);
  const openBtn = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen1(!open1);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen1(true);
  };
  //---- bell iIon
  const [anchorElnot, setAnchorElnot] = React.useState(null);
  const openBell = Boolean(anchorElnot);
  const handleClickBell = (event) => {
    setAnchorElnot(event.currentTarget);
  };
  const handleCloseBell = () => {
    setAnchorElnot(null);
  };

 
  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={dashAppbar} color={'appbar'} position="fixed" >
        <Box display={'flex'} sx={{
        
        }} >
          <Box sx={{
            width: '40px', height: '40px', borderRadius: '4px', zIndex: '111',
            background: 'linear-gradient(136.11deg, #FFFFFF  18.81%, #F3F3F3 70.88%, #F3F3F3 115.09%)'
            ,paddingTop: '8px', paddingLeft: '3px'
          }}>
            <img sx={{  marginTop: '30px'}} src='../../images/ML.png' alt=''></img>
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography variant='body2' sx={{
              color: '#1A1B24', fontWeight: '500', fontFamily: 'Outfit', fontSize: '18px',
            }} >Mazahr Lebanese Kitchen </Typography>
            <Typography variant='caption' sx={{
              color: '#9EA3AE', fontWeight: '400', fontFamily: 'Outfit', fontSize: '12px',
            }}>
              <CiLocationOn size={17} />
              1488 W 11th Ave, Vancouver
            </Typography>
          </Box>
        </Box>
        <Box display={'flex'} alignItems={'center'} 
        sx={{flexDirection: { xs:'column',sm: 'row' }
      , marginTop:{ xs: '8px', sm: '-10px'}
      }}
        >
          <Box display={'flex'}
        // sx={{flexDirection: { xs:'column', },}}
        >
          <Box sx={{marginBottom: '10px'}}>
            <Typography variant='p' sx={{ color: '#9EA3AE', fontFamily: 'Outfit', fontSize: '14px', mr: 1 }}>Today:</Typography>
            <Typography variant='span' style={{ border: '1px solid gray', padding: 5, borderRadius: 3 }} sx={typo14px}>{todayDate()}</Typography>

          </Box>
          <Box sx={{ marginLeft: '10px' }}>
            <Badge color="secondary" variant="dot"
              id="demo-positioned-button"
              aria-controls={openBell ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openBell ? 'true' : undefined}
              onClick={handleClickBell}
            >
              <BsFillBellFill />
            </Badge>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorElnot={anchorElnot}
              open={openBell}
              onClose={handleCloseBell}
              anchorOrigin={{
                horizontal: 'right',
              }}
              sx={{ marginTop: '60px', marginLeft: '-160px' }}
            >
              <MenuItem onClick={() => { handleCloseBell(); setIsDrawerOpen(true);}}
                disableRipple={true} sx={{ width: '240px', marginBottom: '-07px' }}>
                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', }}>
                  <Box component={'div'} sx={typo14px} style={{ fontWeight: '600' }}>
                    Notification
                  </Box>
                  <Box component={'div'} sx={typo12px} style={{
                    textDecoration: 'underline'
                  }}>
                    View All
                  </Box>
                </Box>
              </MenuItem>

              {[1,2,3].map((item=>{
                return(
                  <MenuItem onClick={handleCloseBell} disableRipple={true} key={item}
                    sx={{ marginBottom: '-7px', paddingLeft: '2.9px', paddingRight: '2.9px', marginY: '6px' }}>
                    <Box component={'div'} sx={{
                      display: 'flex', justifyContent: 'space-between', width: '100%'
                    }}>
                      <Box component={'div'}
                        display={'flex'} sx={typo14px} style={{ fontWeight: '600', marginLeft: '7px' }}>
                        <img src="../../images/bellDishes.png" alt="" width={'27px'} />

                        <Box component={'div'} sx={{ marginLeft: '10px' }} >
                          <Box component={'div'} sx={
                            { fontSize: '14px', fontFamily: 'Outfit', fontWeight: '500' }
                          }>Shawarma Plate
                          </Box>
                          <Box component={'div'} sx={
                            { fontSize: '11px ', fontFamily: 'Outfit', fontWeight: '300' }
                          }>Has been Verified <BsCheckCircleFill color='#42C677' size={9} />
                          </Box>
                        </Box>
                      </Box>

                      <Box component={'div'} sx={typo12px} style={{
                      }}>
                        2 minutes ago
                      </Box>
                    </Box>
                  </MenuItem>
                )
              }))}

              <MenuItem onClick={handleCloseBell} disableRipple={true}
                style={{ background: '#F6F6F6', marginTop: '10px' }}
                sx={ctypo12px}> 12 notification more</MenuItem>
            </Menu>
          </Box>
          </Box>


          <Box sx={{ marginLeft: '13px', marginTop: '5px' }}>
            <img src='../../images/ML.png' alt='' width={30}></img>
            <Button sx={{ textTransform: 'none', minWidth: '120px', margin: '0px', padding: '0px' }}
              id="demo-customized-button" disableRipple={true}
              aria-controls={openBtn ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openBtn ? 'true' : undefined}
              variant="contained"
              disableElevation color={'loginOption'}
              onClick={handleClick}
              endIcon={open1 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            >
              <Typography variant='span' sx={{ color: '#545359', fontFamily: 'OutFit', fontSize: '12px', fontWeight: '500' }}>
                Illham Sayf <br />
                <Typography variant='span' sx={{ color: '#545359', fontFamily: 'OutFit', fontSize: '10px ', }}>Manger</Typography>
              </Typography>
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={openBtn}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple={true}
                sx={{ background: '#fff', color: '#545359', fontFamily: 'OutFit', fontSize: '12px', }}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple
                sx={{ background: '#fff', color: '#545359', fontFamily: 'OutFit', fontSize: '12px', }}>
                Switch Account
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple
                sx={{ background: '#fff', color: '#DD7474', fontFamily: 'OutFit', fontSize: '12px', }} >
                Logout
              </MenuItem>
            </StyledMenu>
          </Box>
        </Box>
        {/* <Notification isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen(false)}/> */}

        <Drawer anchor='right' open={isDrawerOpen}
          onClose={()=> setIsDrawerOpen(false)}>
          <Box p={2} width="250px" textAlign={'center'}
            role='presentation'>
            <Typography variant='h6' component='div' onClick={() => setIsDrawerOpen(false)}>
              side panel
            </Typography>

          </Box>
        </Drawer>
      </AppBar>
   
    </ThemeProvider>
  )
}

export default Topperdashboard
