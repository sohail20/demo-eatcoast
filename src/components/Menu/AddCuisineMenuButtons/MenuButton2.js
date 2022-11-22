import React from "react";
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
import AddIcon from "@mui/icons-material/Add";

export default function MenuButton2({ setIsShownButtonBoxFunc }) {
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
  const [checkbox2, setCheckbox2] = React.useState(false);
  const [checkbox3, setCheckbox3] = React.useState(false);  const [isShownCuisine, setIsShownCuisine] = useState(false);
  const [menuVal, setMenuVal] = React.useState("Select sub-cuisine");

  const handleClickCheckbox = () => {
    // setOpen(!open);
    setCheckbox(!checkbox);
  };

  const ItemStyle = {
    "& .Mui-Selected": {
      color: "green",
    },
  };

  const handleIcon = () => {
    setCheckbox(true);
    setCheckbox2(false);
    setCheckbox3(false);
  }
  const handleIcon2 = () => {
    setCheckbox(false);
    setCheckbox2(true);
    setCheckbox3(false);
  }
  const handleIcon3 = () => {
    setCheckbox(false);
    setCheckbox2(false);
    setCheckbox3(true);
  }

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
            fontSize: {xl: "20px", lg: "14px", md: "14px", sm: "14px", xs: "14px"},
            fontWeight: "400",
            fontFamily: "outfit",
            pl: "0px",
            borderColor: "#E1E1E6",
            border: "1px solid",

            height: {
              xl: "70px",
              lg: "48px",
              md: "48px",
              sm: "auto",
              xs: "auto",
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
            fontFamily: "outfit",
          }}
        >
          <MenuItem
            sx={{
              color: "#1A1824",
              width: {xl: "450px", lg: "450px", md: "450px", sm: "450px", xs: "100%", },
              fontSize: "14px",
            }}
            onClick={(e) => {
              setMenuVal("Mesopotamian cuisine");
              handleCloseBox();
              // handleClickCheckbox();
              handleIcon();
            }}
          >
            <ListItemText
                primary="Mesopotamian Cuisine"
                sx={{ color: checkbox ? "#1A1824" : "#9EA3AE" }}
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontFamily: "outfit",
                  fontWeight: checkbox ? "600" : "400",
                }}
              />
              <ListItemIcon>
                {checkbox ? (
                  <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                ) : (
                  ""
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
              setMenuVal("Emirati cuisine");
              handleCloseBox();
              handleIcon2();
            }}
          >
            <ListItemText
                primary="Emirati cuisine"
                sx={{ color: checkbox2 ? "#1A1824" : "#9EA3AE" }}
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontFamily: "outfit",
                  fontWeight: checkbox2 ? "600" : "400",
                }}
              />
              <ListItemIcon>
                {checkbox2 ? (
                  <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                ) : (
                  ""
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
              setMenuVal("Palestinian cuisine");
              handleCloseBox();
              handleIcon3();
            }}
          >
            <ListItemText
                primary="Palestinian Cuisine"
                sx={{ color: checkbox3 ? "#1A1824" : "#9EA3AE" }}
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontFamily: "outfit",
                  fontWeight: checkbox3 ? "600" : "400",
                }}
              />
              <ListItemIcon>
                {checkbox3 ? (
                  <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                ) : (
                  ""
                )}
              </ListItemIcon>
            
          </MenuItem>

          <MenuItem
            sx={{
              color: "#9EA3AE",
              fontFamily: "outfit",
              fontSize: "14px",
              fontWeight: "400",
              pt: "8px", 
              display: "flex",
              justifyContent: "center",   
              pl: {lg: "180px", md: "180px", sm: "170px", xs: "100px"},
              pr: {lg: "180px", md: "180px", sm: "170px", xs: "100px"},
              // pr: "190px"
              
            }}
            onClick={(e) => {
              setMenuVal("Other");
              handleCloseBox();
            }}
          >
            <ListItemText
              primary="Other"
              sx={{ color: "#6A82CF", fontSize: "14px", fontWeight: "600", pr: "0px" }}
              primaryTypographyProps={{
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "outfit",
                
              }}
               
            />
            

            <ListItemIcon >
              <AddIcon  sx={{ color: "#6A82CF",width:"16px", height:"16px"}} />
            </ListItemIcon>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
}
