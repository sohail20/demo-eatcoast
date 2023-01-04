import { Stack, Box, styled } from "@mui/material";
import CustomCalendar from "./Calendar";

const DateRange = ({hasTopInput}) => {
  return (
    <Stack
      spacing={6}
      mt={2}
      direction={"row"}
      justifyContent={"space-between"}
    >
      <CustomCalendar hasTopInput={hasTopInput}/>
      <CustomCalendar hasTopInput={hasTopInput}/>
    </Stack>
  );
};

export default DateRange;
