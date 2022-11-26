import React, { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import Calendar from "react-calendar";
import "./Calendar.css";

const StartDate = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px",
  gap: "10px",
  width: "222px",
  height: "9px",
  background: "#F6F6F6",
  border: "1px solid #E1E1E6",
  borderRadius: "4px",
});

const CustomPlaceHolder = styled(Typography)({
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "145%",
  letterSpacing: "0.015em",
  color: "#9EA3AE",
});

function CustomCalendar({ hasTopInput, onChange, value }) {
  // const [value, onChange] = useState(new Date());

  return (
    <div>
      {hasTopInput && (
        <StartDate mb={2}>
          <CustomPlaceHolder>Start Date</CustomPlaceHolder>
          <i className="fa fa-calendar" style={{ color: "#9EA3AE" }}></i>
        </StartDate>
      )}
      <Calendar
      
        onChange={onChange}
        nextLabel={
          <Box sx={{
            padding: "4px",
            gap: "10px",
            width: "24px",
            height: "24px",
            borderRadius: "16px",
            backgroundColor: "#F0FAF9"

          }}>
            <img src="./images/arrowRight.svg" alt="" />
          </Box>
        }
        prevLabel={
          
          <Box 
          sx={{
            padding: "4px",
            gap: "10px",
            width: "24px",
            height: "24px",
            borderRadius: "16px",
            backgroundColor: "#F0FAF9"

          }}
          >
            <img src="./images/leftArrow.svg" alt="" />
          </Box>
        }
        value={value}
      />
    </div>
  );
}

export default CustomCalendar;
