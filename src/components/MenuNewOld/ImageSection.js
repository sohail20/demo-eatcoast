import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ImageSection() {

    const Typo3 = {
        fontFamily: "Outfit",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: { xl: "30px", lg: "18px", md: "18px", sm: "18px", xs: "18px" },
        lineHeight: "26px",
        /* or 144% */
    
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        paddingTop: { xl: "40px", lg: "30px", md: "30px", sm: "30px", xs: "30px" },
    
        color: "#000000",
      };

      
  return (
    <>
    <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            pt: {xl: "180px", lg: "32px", md: "32px", sm: "32px", xs: "32px"},
          }}
        >
          <Box
            sx={{
              width: {
                xl: "320px",
                lg: "320px",
                md: "320px",
                sm: "250px",
                xs: "200px",
              },
              height: "300px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="./images/MenuBg.png" alt="" width="100%" height="auto" />
          </Box>

          <Box>
            <Typography sx={Typo3}>
              You still don’t have sub cuisine, let’s start making it
            </Typography>
          </Box>
        </Box>
    </>
  )
}
