import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { CustomChip } from "./CustomChip";

export const AllDishesCustomCard = ({ title, subTitle, image, chip }) => {
  const MainBox = styled("div")(({ theme }) => ({
    marginBottom: "24px",
    width: "476px",
    height: "90px",
    border: "1px solid #E1E1E6",
    borderRadius: "6px",
    padding: "12px",
    [theme.breakpoints.down('lg')]:{
        width: "100%",
    },
    // [theme.breakpoints.up('lg')]:{
    //     width: "100%",
    //     height: "auto"
    // }
  }));

  const Typo1 = styled(Typography)(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
    textTransform: "capitalize",
    // [theme.breakpoints.up('lg')]:{
    //     fontSize: "28px",
    //     paddingBottom: "15px"
    // }
  }));

  const Typo2 = styled(Typography)(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
    textTransform: "capitalize",
    color: "#545359",
    width: "277px",

    [theme.breakpoints.down('lg')]:{
        width: "100%",
    },
    // [theme.breakpoints.up('lg')]:{
    //     fontSize: "18px",
    //     width: "100%",
    //     lineHeight: "24px"
    // }
  }));

  const Button1 = styled(Button)(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    color: "#2B817B",
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    textDecoration: "underline",
    padding: "0px",
    minHeight: "0px",
    minWidth: "0px",
    paddingTop: "10px",
    paddingRight: "5px",
  }));

  return (
    <>
      <MainBox>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Box sx={{ width: {xl: "200px", lg: "92px", md: "92px", sm: "70px", xs: "70px"}, height: {xl: "auto", lg: "64px", md: "64px", sm: "64px", xs: "auto"} }}>
              <img src={image} alt="" width="100%" height="auto" />
            </Box>
          </Box>

          <Box sx={{display: "flex", paddingLeft: "16px" }}>
            <Box sx={{ justifyContent: "space-between" }}>
              <Box>
                <Typo1>{title}</Typo1>
              </Box>
              <Box>
                <Typo2>{subTitle}</Typo2>
              </Box>
            </Box>
            <Box sx={{}}>
              <Box>
                <CustomChip label={"Rejected"} color={"#E75C62"} />
              </Box>
              <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                <Button1 variant="text">Edit</Button1>
              </Box>
            </Box>
          </Box>
        </Box>
      </MainBox>
    </>
  );
};
