

import React from 'react';
import {styled} from '@mui/material';
import  Switch from '@mui/material/Switch'
function SwitchButton(props) {
    const CustomSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        border:'2px solid #2B817B',
        borderRadius:'20px',
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 0,
          transitionDuration: '300ms',
          color:'#D5E6E5',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            
            '& + .MuiSwitch-track': {
            //   backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
            backgroundColor:'#2B817B',
              opacity: 1,
              border: 0,
            

            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));
    return ( 
        <>
        <CustomSwitch {...props} />
        </>
     );
}

export default SwitchButton;
