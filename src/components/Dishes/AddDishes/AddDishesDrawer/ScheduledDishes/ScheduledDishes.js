import React from "react";
import DateRange from "../Calendar/DateRange";
import OutlinedInput from "@mui/material/OutlinedInput";
import {
  Typography,
  Box
} from "@mui/material";
import { styled } from "@mui/material";
import { ScheduledDishCard } from "./ScheduledDishCard";

export const ScheduledDishes = ({value, onChange, allData}) => {


  const Para = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "400",
    color: "#1A1824;",
  }));
  return (
    <>
      <Box
        sx={{
          paddingLeft: "32px",
          paddingRight: "32px",
          paddingBottom: "32px",
          paddingTop: "67px",
        }}
      >
        <Para sx={{ fontSize: "16px", fontWeight: "500", mb: "8px" }}>
          Date
        </Para>
        <OutlinedInput
          disabled
        //   placeholder={value.allData}
          placeholder={allData}
          inputProps={{
            color: "#545359",
          }}
          sx={{
            backgroundColor: "#F6F6F6",
            width: "100%",
            height: "48px",
            color: "#545359",
          }}
        />
      </Box>
      <div sx={{ marginLeft: "32px" }}>
        <DateRange 
        // value={value.allData} 
        value={value}
        onChange={onChange} />
      </div>

      <Box
        sx={{
          marginLeft: "32px",
          marginRight: "32px",
          marginTop: "32px",
          marginBottom: "32px",
        }}
      >
        <ScheduledDishCard />
      </Box>
    </>
  );
};
