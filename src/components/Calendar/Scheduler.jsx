import React, { useState, useEffect } from "react";
import { Box, styled, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LightTitle from "../Typography/LightTitle";
import { H1Typo, H3Typo } from "../Typography";
import { FlexBoxContainer } from "../Containers";
const DateBox = styled(Box)(() => ({
  width: "110px",
  height: "96px",
  border: "1px solid #E1E1E6",
}));

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "long",
  });
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month - 1);
}

function getLastDayOfMonth(year, month) {
  return new Date(year, month);
}

function getArrayOfDays(currentYear, currentMonth) {
  let arrayDays = [];
  const numberOfDays = getDaysInMonth(currentYear, currentMonth);
  const previousMonthNumberOfDays = getDaysInMonth(
    currentYear,
    currentMonth - 1
  );
  const FirstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
  const LastDayOfMonth = getLastDayOfMonth(currentYear, currentMonth);
  const previousDay = new Date(FirstDayOfMonth).getDay();
  const nextDay = new Date(LastDayOfMonth).getDay();
  for (let i = 1; i <= numberOfDays; i++) {
    arrayDays.push(i);
  }
  if (previousDay)
    for (let i = 1; i <= previousDay; i++) {
      arrayDays.unshift(previousMonthNumberOfDays + 1 - i);
    }
  if (nextDay)
    for (let i = 1; i <= nextDay - 1; i++) {
      arrayDays.push(i);
    }
  return arrayDays;
}
const CustomScheduler = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentMonthName, setCurrentMonthName] = useState(
    toMonthName(new Date().getMonth() + 1)
  );
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [day, setDays] = useState([]);

  useEffect(() => {
    setDays(getArrayOfDays(currentYear, currentMonth));
    setCurrentMonthName(toMonthName(currentMonth));
  }, [currentMonth, currentYear]);
  return (
    <>
      <FlexBoxContainer>
        <Box
          display="flex"
          gap={2}
          alignItems={"center"}
          justifyContent="center"
        >
          <IconButton
            style={{ background: "#F0FAF9" }}
            onClick={() => {
              setCurrentMonth(currentMonth - 1);
            }}
          >
            <ChevronLeftIcon style={{ color: "#2B817B" }} />
          </IconButton>
          <H1Typo style={{ color: "#2B817B" }}>{currentMonthName} 2022</H1Typo>
          <IconButton
            style={{ background: "#F0FAF9" }}
            onClick={() => {
              setCurrentMonth(currentMonth + 1);
            }}
          >
            <ChevronRightIcon style={{ color: "#2B817B" }} />
          </IconButton>
        </Box>

        <LightTitle>{"( 4 Dishes are scheduled )"}</LightTitle>
      </FlexBoxContainer>
      <Box
        style={{
          display: " inline-grid",
          gridTemplateColumns: "110px 110px 110px 110px 110px 110px 110px",
          padding: 5,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        <LightTitle style={{ textAlign: "center" }}>Sunday</LightTitle>
        <LightTitle style={{ textAlign: "center" }}>Monday</LightTitle>
        <LightTitle style={{ textAlign: "center" }}>Tuesday</LightTitle>
        <LightTitle style={{ textAlign: "center" }}>Wednesday</LightTitle>
        <LightTitle style={{ textAlign: "center" }}>Thursday</LightTitle>
        <LightTitle style={{ textAlign: "center" }}>Friday</LightTitle>
        <LightTitle style={{ textAlign: "center" }}>Saturday</LightTitle>
      </Box>

      <Box
        style={{
          display: " inline-grid",
          gridTemplateColumns: "110px 110px 110px 110px 110px 110px 110px",
        }}
      >
        {day.map((e, index) => (
          <DateBox>
            <Box textAlign="end">
              {index === 19 ? (
                <BorderColorOutlinedIcon
                  style={{ color: "#FAA641", fontSize: "22px" }}
                />
              ) : (
                <AddIcon
                  style={{
                    fontSize: "22px",
                    color: "#42C677",
                  }}
                />
              )}
            </Box>
            <Box textAlign="center">
              <H3Typo style={{ color: "#545359" }}>{e}</H3Typo>
              <LightTitle style={{ color: "#9EA3AE" }}>
                {index === 20 ? "Title" : null}
              </LightTitle>
            </Box>
          </DateBox>
        ))}
      </Box>
    </>
  );
};

export default CustomScheduler;
