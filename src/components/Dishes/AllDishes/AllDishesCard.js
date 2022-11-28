import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { AllDishesCustomCard } from "./AllDishesCustomCard";
// import { AllDishesData } from "./Config";

export const AllDishesCard = ({AllDishesData, onHandleClick}) => {

    const Title = styled(Typography)(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: "26px",
        textTransform: "capitalize",
      }));

      const Typo1 = styled(Typography)(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px",
        textTransform: "capitalize",
        color: "#9EA3AE"
      }));

      const Typo2 = styled(Typography)(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "20px",
        textTransform: "capitalize",
        color: "#2B817B"
      }));


  return (
    <>
    <Box sx={{display: "flex", justifyContent: "space-between"}}>
    <Box><Title pb="8px">All Dishes</Title></Box>
    <Box sx={{display: "flex"}}>
        <Typo1>Total dishes :</Typo1>
        <Typo2 sx={{pl: "10px"}}>20 Dishes</Typo2>
    </Box>
    </Box>
      <Box>
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
            
          {AllDishesData.map((item, i) => {
            return (
              <>
                <Grid xl={6} item lg={6} md={6} sm={12} xs={12}>
                  <AllDishesCustomCard data = {item} onHandleClick={onHandleClick}/>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
