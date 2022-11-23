import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import { styled, alpha } from '@mui/material/styles';


export default function CustomSearchBar({icon, placeholder, bgColor, color, border, height, filterNames}) {

  // const Data = [
  //   {
  //     title: "Beef",
  //     digit: "*10",
  //     btnName: "Pcs",
  //     image: "./images/Beef.svg"
  //   },
  //   {
  //     title: "Onion",
  //     digit: "*10",
  //     btnName: "Pcs",
  //     image: "./images/Beef.svg"
  //   },
  // ];

  // const [titl, setTitl] = React.useState(Data);
  // const filterTitle = e => {
  //   const search = e.target.value.toLowerCase()
  //   const filteredTitle = Data.filter(titl => titl.title.toLowerCase().includes(search))
  //   setTitl(filteredTitle)
  // }


  return (

    <>
    <Box sx={{ 
      // paddingLeft: "16.43px"
       }}>
              <Input
                fullWidth
                disableUnderline="true"
                placeholder={placeholder}
                onChange = {(e) => filterNames(e)}
                endAdornment={
                  <InputAdornment position="start">
                    <img
                      src={icon}
                      sx={{
                        width: "17.75px",
                        height: "20.5px",
                      }}
                    />
                  </InputAdornment>
                }
                sx={{
                  borderColor: "#E1E1E6",
                  border: {border},
                
                  height: {height},
                  borderRadius: "6px",
                  padding: "15px, 24px, 15px, 24px",
                  gap: { lg: "16px", md: "16px", sm: "0px", xs: "0px" },
                  backgroundColor: {bgColor} ,
                  color: {color} ,
                  paddingLeft: "16px",
                  paddingRight: "18px"
                }}
              ></Input>
            </Box>
           
    </>
  )
}
