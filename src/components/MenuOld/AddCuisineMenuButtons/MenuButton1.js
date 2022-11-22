import React from 'react'
import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import IconButton from '@mui/material/IconButton';
import { useState } from "react";



export default function MenuButton1({setIsShownButtonBoxFunc}) {


    const TypoTitle = styled("div")(({ theme }) => ({
        // padding: theme.spacing(0, 14),
        fontFamily: "Outfit",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "32px",
    
        color: "#1A1824",
      }));
    
      const Typo1 = styled("div")(({ theme }) => ({
        // padding: theme.spacing(0, 17),
        fontFamily: "Outfit",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
    
        // display: "flex",
        alignItems: "center",
        // textAlign: "center",
    
        color: "#1A1824",
        paddingBottom: "8px",
      }));
    
      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    
      const [val, setVal] = React.useState("");
    
      const handleChange = (event) => {
        setVal(event.target.value);
      };
    
      const [open, setOpen] = React.useState(true);
      const [checkbox, setCheckbox] = React.useState(false);
      const [isShownCuisine, setIsShownCuisine] = useState(false);
      const [menuVal, setMenuVal] = React.useState("Arabian Cuisine");
    
      const handleClickCheckbox = () => {
        // setOpen(!open);
        setCheckbox(!checkbox);
      };
    
      const ItemStyle = {
        "& .Mui-Selected": {
          color: "green",
        },
      };
    
      const handleClickBtn = (event) => {
        setIsShownCuisine((current) => !current);
        handleClose();
        setIsShownButtonBoxFunc(true);
      };
    
      const handleCloseBtn = (event) => {
        // !setIsShownCuisine((current) => !current);
        handleClose();
        // setIsShownButtonBoxFunc(true);
      };
    
      const [anchorEl, setAnchorEl] = React.useState(null);
      const openBox = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleCloseBox = () => {
        setAnchorEl(null);
      };




  return (
<>
<Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <Button
                    fullWidth
                    id="basic-button"
                    aria-controls={openBox ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowRightIcon />}
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "16px",
                      fontWeight: "400",
                      pl: "0px",
                      borderColor: "#E1E1E6",
                      border: "1px solid",
                    fontFamily: "outfit",
                      height: {
                        lg: "56px",
                        md: "56px",
                        // sm: "45%",
                        xs: "40px",
                      },
                      borderRadius: "6px",
                      backgroundColor: "#F6F6F6",
                      color: "#9EA3AE",
                      justifyContent: "space-between",
                      pl: "16px",
                      pr: "16px",
                    }}
                  >
                    {menuVal}
                  </Button>
                  <Menu
                    fullWidth
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openBox}
                    onClose={handleCloseBox}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    // elevation={0}
                    sx={{
                      border: "1px solid #E1E1E6",
                      borderRadius: "6px",
                    }}
                  >
                    {/* <MenuItem
                      sx={{
                        color: "#9EA3AE",
                        width: "450px",
                        pt: "0px",
                        pb: "0px",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                      onClick={(e) => {
                        setMenuVal("All Cuisine");
                        handleCloseBox();
                      }}
                    >
                      <ListItemText primary="All Cuisine" />
                    </MenuItem>
                    <Divider variant="middle" orientation="horizontal" /> */}
                    <MenuItem
                      sx={{
                        color: "#1A1824",
                        width: "450px",                        
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                      onClick={(e) => {
                        setMenuVal("Arabian Cuisine");
                        handleCloseBox();
                        handleClickCheckbox();
                      }}
                    >
                      <ListItemText primary="Arabian Cuisine" primaryTypographyProps={{fontSize: '14px', fontFamily: "outfit", fontWeight: "600",}}/>
                      <ListItemIcon>
                        {checkbox ? (
                          ""
                        ) : (
                          <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                        )}
                      </ListItemIcon>
                    </MenuItem>
                    <Divider variant="middle" orientation="horizontal" />
                    <MenuItem
                      sx={{
                        color: "#9EA3AE",
                        fontFamily: "outfit",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                      onClick={(e) => {
                        setMenuVal("American Cuisine");
                        handleCloseBox();
                      }}
                    >
                      American Cuisine
                    </MenuItem>
                    <Divider variant="middle" orientation="horizontal" />
                    <MenuItem
                      sx={{
                        color: "#9EA3AE",
                        fontFamily: "outfit",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                      onClick={(e) => {
                        setMenuVal("Japanese Cuisine");
                        handleCloseBox();
                      }}
                    >
                      Japanese Cuisine
                    </MenuItem>
                    
                  </Menu>
                </FormControl>
              </Box>

</>  )
}
