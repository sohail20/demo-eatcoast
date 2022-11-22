import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close';

export default function AddDishesSubHeader() {
    const Heading1 = styled("div")(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "24px",
        color: "#2B817B",
        textTransform: "capitalize",
      }));
    
      const Typo1 = styled("div")(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "28px",
        textTransform: "capitalize",
      }));

      const Button1 = styled(Button)(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "20px",
        textTransform: "capitalize",
        border: "1px solid #80B3B0",
        height: "40px",
        
      }));

      const Button2 = styled(Button)(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "20px",
        textTransform: "capitalize",
        border: "1px solid #80B3B0",
        height: "40px",
        
        
      }));

      const Button3 = styled(Button)(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "20px",
        textTransform: "capitalize",
        height: "40px",
        backgroundColor: "#D5E6E5",
        color: "#ffffff",
        
      }));


  return (
<>
<Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box >          
            <Box >
            <Button width="20%">
              <Box sx={{ display: "flex",
              //  alignItems: "center" 
               }}>
                <CloseIcon sx={{fill: "#E75C62"}}/>
              </Box>
              
            </Button>
            </Box>
        </Box>


        <Box  sx={{ display: "flex", justifyContent: "center" }}>
          <Typo1 variant="body1" color="initial">
          Add Dishes
          </Typo1>
        </Box>

        <Box  sx={{display: "flex", flexDirection: "row"}}>
            <Box ><Button1 variant="outlined" height= "40px" sx={{color: "#80B3B0", }}>Save as Draft</Button1></Box>
            <Box ml="12px"><Button2 variant="outlined" ><img src="./images/trash.svg" alt="" width="24px" height="24px" /></Button2></Box>
            <Box ml="12px"><Button3 variant="contained" >Submit</Button3></Box>
        </Box>
      </Box>

</>  

)
}
