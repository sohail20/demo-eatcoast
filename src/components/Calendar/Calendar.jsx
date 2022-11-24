import React, { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import Calendar from "react-calendar";
import "./Calendar.css";
import CustomInput from "../Inputs/CustomInput";

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

function CustomCalendar({ hasTopInput, handleOnSelect }) {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      {hasTopInput && (
        <Box style={{marginBottom:20}}>
          <CustomInput label="Date" value="Tuesday 22/22/22"/>
        </Box>
      )}
      <Calendar
        onChange={handleOnSelect}
        nextLabel={
          <i class="fa fa-chevron-right" style={{ color: "#2B817B" }}></i>
        }
        prevLabel={
          <i class="fa fa-chevron-left" style={{ color: "#2B817B" }}></i>
        }
        value={value}
      />
    </div>
  );
}

export default CustomCalendar;
