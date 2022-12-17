import React from 'react'
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
import CustomInput from '../Inputs/CustomInput';
// import SendIcon from '../images/send-2.svg';


const AddBox = styled(IconButton)(({ theme }) => ({
    width: "32px",
    height: "32px",
    borderRadius: "10px",
    padding: "4px",
    backgroundColor: "#FFFFFF",
  }));


  const Button1 = styled(Button)(({ theme }) => ({
    width: "88px",
    height: "36px",
    borderRadius: "6px",
    padding: "8px, 16px, 8px, 16px",
    backgroundColor: "#2B817B",
    ":hover" : {
        backgroundColor: "#2B817B",
    }
  }));


  const Typo1 = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
  }));


  
export const LiveChatMsgField = () => {
  return (
    <div>
        <Box component="container"  width="100%">
        <Box sx={{display: "flex",}}>
        <AddBox>
            <Box sx={{width: "24px", height: "24px"}}><img src="./images/add.svg" alt="" width="100%" height="auto" /></Box>
        </AddBox>

        <Box pl="28px">
            {/* <CustomInput placeholder={"Type some message"} width="100%"/> */}
            <TextField
            placeholder="Type some message"
        sx={{
          ".MuiInputBase-root": {
            height: "40px",
          },
          width: {xl: "860px", lg: "860px", md: "860px", sm: "100%", xs: "100%"},
          background: "#F6F6F6",
        }}
      />
        </Box>

        <Box pl="28px">
        <Button1 variant="contained" >
        <Typo1>Send</Typo1>
        <Box pl="8px" sx={{display: "flex", textAlign: "center"}}>
        <img src="../images/send-2.svg" alt="" />
        </Box>
      </Button1>
        </Box>
        </Box>
        </Box>
    </div>
  )
}
