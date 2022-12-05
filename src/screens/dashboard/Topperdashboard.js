import { AppBar, Menu, Box,  MenuItem, Toolbar, Typography, Badge, Drawer, IconButton, Tooltip, Avatar } from '@mui/material'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BsFillBellFill, BsCheckCircleFill } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { AccountCircle } from '@mui/icons-material'


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
  boxShadow: 'none', height: { xs: '70px' },
  borderBottom: '1px solid #E1E1E6',
  paddingLeft: { xs: '60px', md: '90px' }, paddingRight: '0px',
  width: '100%',
  paddingBottom: '20px'
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
const Typo12pxSlid = { background: '#fff',
 color: '#545359', 
 fontFamily: 'OutFit',
  fontSize: '12px', cursor: 'pointer'
  }
// -------login button 


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
const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },

}));
const Root1 = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    display: 'none',
    padding: '0px', margin: '0px',
  },

}));
const Topperdashboard = () => {

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open1, setOpen1] = React.useState(true);
  //---- bell iIon
  const [anchorElnot, setAnchorElnot] = React.useState(null);
  const openBell = Boolean(anchorElnot);
  const handleClickBell = (event) => {
    setAnchorElnot(event.currentTarget);
  };
  const handleCloseBell = () => {
    setAnchorElnot(null);
  };




  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={dashAppbar} color={'appbar'} position="fixed" >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box display={'flex'} alignItems={'center'} sx={{width: '300px',  mt:1}}>
            <img src='../../images/ML.svg' alt='logo'></img>
            <Box sx={{ ml: 1 }}>
              <Typography variant='body2' sx={{
                color: '#1A1B24', fontWeight: '500', fontFamily: 'Outfit',
                fontSize: { xs: '12px', sm: '14px', md: '18px' },
              }} >Mazahr Lebanese Kitchen </Typography>
              <Typography variant='caption' sx={{
                color: '#9EA3AE', fontWeight: '400', fontFamily: 'Outfit', fontSize: '12px',
              }}>
                <CiLocationOn size={17} />
                1488 W 11th Ave, Vancouver
              </Typography>
            </Box>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography variant='p' sx={{ color: '#9EA3AE', fontFamily: 'Outfit', fontSize: '14px', mr: 1 }}>Today:</Typography>
              <Typography variant='span'
                style={{ border: '1px solid gray', padding: 5, borderRadius: 3 }} sx={typo14px}>{todayDate()}</Typography>
            </Box>
              {/* ---- */}
              <Box >
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
                  sx={{ marginTop: '60px', marginLeft: '-70px' }}
                >
                  <MenuItem onClick={() => { handleCloseBell(); setIsDrawerOpen(true); }}
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

                  {[1, 2, 3].map((item => {
                    return (
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
            {/* --=-=-= */}
                <Box>
               
              <Tooltip title="Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy " src="images/image.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* <MenuItem onClick={handleCloseUserMenu} disableRipple> */}
                <Typography sx={Typo12pxSlid} m={1} onClick={handleCloseUserMenu}
                   >Yousaf (Mang)</Typography>
                  {/* </MenuItem> */}
                {/* <MenuItem onClick={handleCloseUserMenu} disableRipple */}
                  {/* > */}
                <Typography sx={Typo12pxSlid} m={1} onClick={handleCloseUserMenu}
                  >Profile</Typography>
                {/* </MenuItem> */}

                {/* <MenuItem onClick={handleCloseUserMenu} disableRipple */}
                  {/* > */}
                <Typography sx={Typo12pxSlid} m={1} onClick={handleCloseUserMenu}
                  >Switch Account</Typography>
                {/* </MenuItem> */}

                {/* <MenuItem onClick={handleCloseUserMenu}  disableRipple */}
                   {/* > */}
                <Typography sx={Typo12pxSlid} mx={1} style={{ color: '#DD7474' }} onClick={handleCloseUserMenu} 
                  >Logout</Typography>   
                {/* </MenuItem> */}
              </Menu>
                  
                  </Box>    

            {/* --=-=-= */}
              </Box>

          </Box>
        {/* </Box> */}

        <Drawer anchor='right' open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}>
          <Box p={2} width="320px" textAlign={'center'}
            role='presentation'>
              <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant='h6' component='div' onClick={() => setIsDrawerOpen(false)}>
              X
            </Typography>
            <Typography variant='h6' component='div' >
              side panel
            </Typography>
            <Box></Box>
              </Box>
                  <Box>
              {[1, 2, 3].map((item => {
                return (
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

                  </Box>
          </Box>
        </Drawer>
      </AppBar>
    </ThemeProvider>

  )
}

export default Topperdashboard
