import React from "react";
import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
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
import { H3Typo } from "../Typography";
import { CenteredBoxContainer } from "../Containers";

export default function CustomSelectInput({ label, selectedValue = {}, items, handleSelectMenu }) {
  const [open] = React.useState(true);
  const [checkbox] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openBox = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // setDisableFunc(true);
  };
  const handleCloseBox = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <H3Typo>{label}</H3Typo>
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
              fontSize: {
                xl: "20px",
                lg: "14px",
                md: "14px",
                sm: "14px",
                xs: "14px",
              },
              fontWeight: "400",
              pl: "0px",
              borderColor: "#E1E1E6",
              border: "1px solid",
              fontFamily: "outfit",
              height: "40px",
              borderRadius: "6px",
              backgroundColor: "#F6F6F6",
              color: "#9EA3AE",
              justifyContent: "space-between",
              pl: "16px",
              pr: "16px",
            }}
          >
            {typeof selectedValue === "object" ? (
              <CenteredBoxContainer>
                <img
                  style={{ width: "35px", marginRight: "20px" }}
                  src={selectedValue.img}
                />
                {selectedValue.label}
              </CenteredBoxContainer>
            ) : (
              selectedValue
            )}
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
            {items.map((item) => (
              <MenuItem
                sx={{
                  color: "#1A1824",
                  width: "450px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
                onClick={() => {
                  handleSelectMenu(item)
                  handleCloseBox()
                }}
              >
                <img
                  style={{ width: "35px", marginRight: "20px" }}
                  src={item.img}
                />
                <ListItemText
                  primary={item.label}
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
            ))}
          </Menu>
        </FormControl>
      </Box>
    </>
  );
}
