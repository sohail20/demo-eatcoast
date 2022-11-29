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

export const ScheduledDishCard = () => {

    const Heading1 = styled(Typography)(({ theme }) => ({
        fontFamily: "Outfit",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#1A1824;",
      }));

    const Para = styled(Typography)(({ theme }) => ({
        fontFamily: "Outfit",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "16px",
        color: "#1A1824;",
      }));

  return (
    <>
    <Box
        sx={{
            paddingTop: "16px" ,
            paddingBottom: "16px",
            paddingLeft: "16px",
            paddingRight: "16px",
            borderRadius: "8px",
            border: "1px solid #E1E1E6",
            display: "flex",
            width: {xl: "476px", lg: "476px", md: "476px", sm : "476px", xs: "100%"},
            flexDirection: {xl: "row", lg: "row", md: "row", sm: "row", xs: "column"}
        }}
      >
        <Box sx={{ width: "80.5px", height: "56px" }}>
          <img src="./images/kibbeh.png" alt="" width="100%" height="auto" />
        </Box>
        <Box sx={{ paddingLeft: {xl: "18px", lg: "18px", md: "18px", sm: "18px", xs: "0px"} }}>
          <Box>
            <Heading1>Kibbeh</Heading1>
          </Box>
          <Box>
            <Para sx={{ maxWidth: {xl: "277px", lg: "277px", md: "277px", sm: "100%", xs: "100%"} }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum is simply{" "}
            </Para>
          </Box>
        </Box>
      </Box>
    </>
  )
}
