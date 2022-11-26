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
  IconButton
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import { styled, alpha } from '@mui/material/styles';


export default function CustomSearchBar({title, icon, placeholder, color, border, height, filterNames, onChangeProp, onClickIconBtn, borderColor, bgColor}) {

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

  const Title = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
    color: "#1A1824",
    display: "flex",
    alignItems: "center",
    paddingBottom: "8px",
  }));


  return (

    <>
    <Box sx={{ 
       }}>
        <Title>{title}</Title>
              <Input
                width="476px"
                disableUnderline="true"
                placeholder={placeholder}
                onChange = {onChangeProp}
                endAdornment={
                  <InputAdornment position="start">
                    <IconButton onClick={onClickIconBtn}>
                  <img
                    src={icon}
                    sx={{
                      width: "16px",
                      height: "16px",
                    }}
                  />
                </IconButton>
                  </InputAdornment>
                }
                sx={{
                  borderColor: {borderColor},
                  border: {border},
                  width: {
                    xl: "478px",
                    lg: "478px",
                    md: "478px",
                    sm: "478px",
                    xs: "100%",
                  },
                  height: {height},
                  borderRadius: "6px",
                  padding: "15px, 24px, 15px, 24px",
                  gap: { lg: "16px", md: "16px", sm: "0px", xs: "0px" },
                  // backgroundColor: {bgColor} ,
                  backgroundColor: `${bgColor}`,     
                  color: {color} ,
                  paddingLeft: "16px",
                  paddingRight: "18px"
                }}
              ></Input>
            </Box>
           
    </>
  )
}
