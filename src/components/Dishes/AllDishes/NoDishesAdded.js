import React from 'react';
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

export default function NoDishesAdded() {

    const SubBox = styled("div")(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        padding: "60px, 428px, 60px, 428px",
        height: "114px",
        border: "1px solid #E1E1E6",
        borderRadius: "8px",
      }));

      const Typo1 = styled("div")(({ theme }) => ({
        fontFamily: "outfit",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px",
        color: "#9EA3AE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100%"
      }));


  return (
    <>
    <Box>
        <SubBox 
        sx={{
          width:{xl: "1140px", lg: "973px", md: "100%", sm: "100%", xs: "100%"}
        }}
        >
        <Typo1>
        No dishes added
        </Typo1>
        </SubBox>
    </Box>
    </>
  )
}
