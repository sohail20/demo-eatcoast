import React from "react";
import {
  Typography,
  Box,
  Button,
  Avatar,
  IconButton,
  Grid,
  Container,
} from "@mui/material";
import { styled } from "@mui/material";
import { useState, useRef } from "react";
import Drawer from "@mui/material/Drawer";
import { AddIngridient } from "./AddIngridient/AddIngridient";
import CloseIcon from "@mui/icons-material/Close";

export const AddDishesDrawer = ({ setOpenDrawer, openDrawer, Component, title,  }) => {
  const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "600",
    color: "#1A1824;",
  }));

  const Para = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "400",
    color: "#1A1824",
  }));
  const Btn = styled(Button)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "600",
    textTransform: "capitalize",
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setAnchorEl(null);
    setOpenDrawer(false);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={openDrawer}
        width="100%"
        // sx={{paddingLeft: "32px", paddingRight: "32px"}}
      >
        <Container
          sx={{
            width: { lg: "540px", md: "540px", sm: "540px", xs: "100%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "35px",
            // paddingLeft: "32px", paddingRight: "32px"
          }}
        >
          <IconButton onClick={handleCloseDrawer} aria-label="delete">
            <CloseIcon sx={{ fill: "#E75C62" }} />
          </IconButton>

          <Box>
            <Para
              sx={{
                fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "16px" },
                fontWeight: "600",
              }}
            >
              {title}
            </Para>
          </Box>
          <Box sx={{ paddingRight: "10px" }}>
            <Btn
              sx={{
                padding: "10px 16px",
                backgroundColor: "#2B817B",
                color: "white",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "#2B817B"
                }
              }}
            >
              Save
            </Btn>
          </Box>
        </Container>

        <Box>
          {Component}
        </Box>
      </Drawer>
    </>
  );
};












