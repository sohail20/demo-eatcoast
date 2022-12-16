import React from "react";
import { Typography, Box, Container, Button } from "@mui/material";
import { styled } from "@mui/material";
import logo from "./Images/logo.png";
import sidebtn from "./Images/sidebtn.png";
import element4 from "./Images/element-4.png";
import box from "./Images/box.png";
import book from "./Images/book.png";
import recipt from "./Images/receipt-discount.png";
import button_side from "./Images/Button-side.png";
import setting from "./Images/setting-2.png";
import arrowRight from './Images/arrow-right.png';

const Heading = styled(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: "600",
  color: "#1A1824;",
}));

const Para = styled(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: "400",
}));

function Side_Bar() {
  const iconList = [
    logo,
    sidebtn,
    element4,
    box,
    book,
    recipt,
    button_side,
    setting,
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          width: "5%",
          borderRight: "1px solid #E1E1E6",
          justifyContent: "space-around",
        }}
        className='sidebox'
      >
        {["logo", "arrow-right", "element-4", "box","book","book","receipt-discount","Button-side","setting-2"].map((i, index) =>(
          <Button key={index}>
            <img src={require(`./Images/${i}.png`)} />
          </Button>
        ))}
      </Box>
    </>
  );
}

export default Side_Bar;
