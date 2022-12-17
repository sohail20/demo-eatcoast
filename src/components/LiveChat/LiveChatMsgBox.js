import React from "react";
import {
    Box,
    IconButton,
    styled,
    Typography,
    Stack,
    Checkbox,
    Button,
    TextField,
  } from "@mui/material";

const ImgBox = styled(Box)(({ theme }) => ({
    width: "54px",
    height: "54px",
    border: "1px solid #E1E1E6",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  }));


  
const MsgBox = styled(Box)(({ theme }) => ({
    width: "171px",
    height: "36px",
   backgroundColor: "#E1E1E6",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: "8px, 16px, 8px, 16px",
    borderRadius: "4px",
  }));

export const LiveChatMsgBox = () => {
  return (
    <div>
      <Box sx={{display: "flex", ml:{xl: "80px", lg: "80px", md: "80px", sm: "10px", xs: "0px"}}}>
        <ImgBox >
        <Box sx={{
            width: "44.61px",
            height: "44.61px"
        }}>
          <img src="./images/Ellipse 6.svg" alt="" width="100%" height="auto" />
        </Box>
        </ImgBox>

        <MsgBox ml="16px">
            <Typography>
            How we can help you ?
            </Typography>
        </MsgBox>
      </Box>
    </div>
  );
};
