import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'

export default function DishesMealPlanCard() {

    const Typo1 = styled("div")(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "28px",
      }));

      const Typo2 = styled("div")(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "16px",
        maxWidth: "460px",
        color: "#545359",
        [theme.breakpoints.down('md')]:{
          width: "100%",
          maxWidth: "100%",
          textAlign: "justify"
      }
      }));

      const Typo3 = styled("div")(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px",
        color: "#2B817B",
        textDecoration: "underline",
        textTransform: "capitalize",
       
      }));
      
  return (
    <>
      <Box>
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Box sx={{display: "flex", flexDirection: {xl: "row", lg: "row", md: "row", sm: "column", xs: "column"},}}>
          <Box sx={{width: {xl: "72px", lg: "72px", md: "72px", sm: "72px", xs: "100%"}, height: {xl: "72px", lg: "72px", md: "72px", sm: "auto", xs: "auto"}}}>
            <img src="./images/CardImage.png" alt="" width="100%" height="auto" />
          </Box>
          <Box pl="16px" pt="8px">
            <Typo1 pb= "10px">
              Salmon with chili sauce
            </Typo1>
            <Typo2 >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typo2>
          </Box>
        </Box>
        <Box pt="8px">
           <Button> <Typo3>Edit</Typo3></Button >
        </Box>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
}
