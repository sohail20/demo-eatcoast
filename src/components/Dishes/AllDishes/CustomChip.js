import React from 'react'
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled, alpha } from "@mui/material/styles";


export const CustomChip = ({label, color, ...other}) => {
    
  const CustomChip = styled(Chip)(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "18px",
    textTransform: "capitalize",
    color: "#ffffff",
    padding: "2px, 12px, 2px, 12px",
    borderRadius: "6px",
    height: "22px",
    backgroundColor: `${color}`,
    ...other
    
    // [theme.breakpoints.up('lg')]:{
    //     fontSize: "18px",
    //     paddingTop: "15px",
    //     paddingBottom: "15px",
    // }
  }));


  return (

    <>
    <Box><CustomChip label={label}   /></Box>
    </>

    )
}
