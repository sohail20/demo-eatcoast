import { AppBar, Box,Toolbar, Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    appbar: {
      main: '#fff',
    },
    loginField2: {
      main: '#F6F6F6',
    },

  },

});


const dashAppbar = {
  boxShadow: 'none', height: '65px',
  borderBottom: '1px solid #E1E1E6',
}

const todayDate=()=>{
  let currentDate='';
  const daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthName = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct","Nov" ,"Dec"];
  let setTodatDate='';
   currentDate= new Date();
let now = currentDate.getDay();
let nameofDay = daysName[now];
let todayDate = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let Month = monthName[currentMonth];
let fullYear =currentDate.getFullYear();
 return setTodatDate = (nameofDay + ',' + todayDate + " " + Month + "," + " " + fullYear); 


}
export const Topperdashboard = ({ handleDrawerOpen, open }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={dashAppbar} color={'appbar'} position="fixed" open={open}>
        <Toolbar style={{ marginLeft: '80px' }}>
          <Box display={'flex'} alignItems={'center'} >
            <Box display={'flex'} alignItems={'center'}>
              <Box>
                <img src='../../images/ML.png' alt=''></img>
              </Box>
              <Box>
                <Typography variant='body2' >Mazahr Lebanese Kitchen </Typography>
                <Typography variant='body2' >   1488 W 11th Ave, Vancouver </Typography>
              </Box>
            </Box>
            <Box>
            <Box>
                Today: <Typography variant='span'>{todayDate()}</Typography>
            </Box>
            <Box>
              <Typography variant='span'></Typography>
            </Box>
            <Box>
               <Typography variant='span'></Typography>
            </Box>

            </Box>
          </Box>

        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}
