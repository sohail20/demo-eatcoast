import React from "react";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


export default function SubHeader() {
  
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
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box width="20%">          
            <Box >
            <Button width="20%" >
              <Box sx={{ display: "flex",
              //  alignItems: "center" 
               }}>
                <img
                  src="./images/leftArrow.svg"
                  alt=""
                  width="16px"
                  height="16px"
                />
              </Box>
              <Box pl="14px">
                <Heading1 >Back</Heading1>
              </Box>
            </Button>
            </Box>
        </Box>


        <Box width="50%" sx={{ display: "flex", justifyContent: "center" }}>
          <Typo1 variant="body1" color="initial">
            Meal Plan
          </Typo1>
        </Box>
      </Box>
    </>
  );
}
