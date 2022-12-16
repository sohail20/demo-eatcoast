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
  import Chip from '@mui/material/Chip';
import { LiveChatMsgBox } from './LiveChatMsgBox';
import { LiveChatCard } from './LiveChatCard';
import { LiveChatMsgField } from './LiveChatMsgField';


export const LiveChat = () => {

    const Title = styled(Typography)(({ theme }) => ({
        fontFamily: theme.typography.fontFamily,
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "20px",
        letterSpacing: "0.015em",
        color: "#1A1824",
      }));
    
      const Typo1 = styled(Typography)(({ theme }) => ({
        fontFamily: theme.typography.fontFamily,
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        color: "#9EA3AE",
        textAlign: "justify",
        lineHeight: "16px",
        width: "596px",
      }));
  
      const Heading1 = styled("div")(({ theme }) => ({
          // padding: theme.spacing(0, 2),
          fontFamily: "outfit",
          fontSize: "20px",
          fontWeight: "600",
          lineHeight: "24px",
          color: "#1A1824",
          textTransform: "capitalize",
  
          [theme.breakpoints.down('sm')]:{
              fontSize: "12px",
          }
        }));


  return (
    <div>
        <Box pb="24px" sx={{mt: {lg: "0px", md: "0px", sm: "100px", xs: "100px"}}}>
        <Box display={"flex"} alignItems="center">
            <Box>
              <Button width="100%">
                <Box
                  sx={{
                    display: "flex",
                    //  alignItems: "center"
                    
                  }}
                >
                  <img
                    src="./images/arrow-left.svg"
                    alt=""
                    width="24px"
                    height="24px"
                  />
                </Box>
                <Box pl="14px">
                  <Heading1>Live Chat</Heading1>
                </Box>
              </Button>
            </Box> 
        </Box>

        <Box mt="30px" sx={{display: "flex", justifyContent: "center"}}>
            <Chip label="Today, Sept 12, 2021" sx={{backgroundColor:"#E1E1E6", borderRadius: "16px", color: "#9EA3AE"}} />
        </Box>

        <Box mt="31px" >
            <LiveChatMsgBox/>
        </Box>

        <Box sx={{display: "flex", justifyContent: "center", pt: "242px"}}>
            <LiveChatCard/>
        </Box>

        <Box sx={{display: "flex", justifyContent: "center", pt: "56px"}}>
            <LiveChatMsgField/>
        </Box>
        </Box>
    </div>
  )
}
