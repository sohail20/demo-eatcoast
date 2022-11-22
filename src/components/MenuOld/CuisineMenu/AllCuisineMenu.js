import * as React from "react";
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import ButtonBase from "@mui/material/ButtonBase";
import CustomSelectMenu from "./CustomSelectMenu";
import ArabianCuisineMenu from "./ArabianCuisineMenu";

export default function AllCuisineMenu() {
  const Data = [
    {
      title: "Mesopotamian Cuisine",
      subTitle: "you have 9 menu",
      image: "./images/meal1.svg",
    },
    {
      title: "Emirati cuisine",
      subTitle: "you have 9 menu",
      image: "./images/meal1.svg",
    },
    {
      title: "Mesopotamian Cuisine",
      subTitle: "you have 9 menu",
      image: "./images/Palestinian.svg",
    },
    {
      title: "Mesopotamian Cuisine",
      subTitle: "you have 9 menu",
      image: "./images/Mespotamian.svg",
    },
    {
      title: "Mesopotamian Cuisine",
      subTitle: "you have 9 menu",
      image: "./images/foodimg1.svg",
    },
    {
      title: "Mesopotamian Cuisine",
      subTitle: "you have 9 menu",
      image: "./images/foodimg2.svg",
    },
  ];

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "120px",
  });

  const Typo1 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "26px",
    color: "#1A1824",
  }));

  const Typo2 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "26px",
    color: "#9EA3AE",
  }));

  const Typo3 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "28px",
  }));

  const Typo4 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    color: "#9EA3AE"
  }));

  return (
    <>
      <Box sx={{}}>
        {/* <Box><ArabianCuisineMenu/></Box> */}
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Box><Typo3 sx={{pb: "16px"}}>American Cuisine</Typo3></Box>
        <Box><Typo4 >6 Sub-cuisine</Typo4></Box>
        </Box>
        <Grid container>
          {Data.map((item, index) => {
            return (
              <>
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                  <Box
                    sx={{
                      // p: 2,
                      maxWidth: "350px",
                      flexGrow: 1,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                      border: "1px solid #E1E1E6",
                      mb: "32px",
                      borderRadius: "8px",
                      height: "120px",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        width: "139px",
                        backgroundColor: "#F0FAF9",
                        backgroundImage: "url(./images/thread.svg)",
                        backgroundPosition: "Bottom Right",
                        backgroundRepeat: "no-repeat",
                        height: "120px",
                      }}
                    >
                      <img src={item.image} alt="" />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "space-between",
                        pl: "12px",
                        pt: "8px",
                        pb: "8px",
                      }}
                    >
                      <Box>
                        <Typo1>{item.title}</Typo1>
                      </Box>
                      <Box>
                        <Typo2>{item.subTitle}</Typo2>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
