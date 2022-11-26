import { Stack, Box, styled } from "@mui/material";
import CustomCalendar from "./Calendar";

const DateRange = ({hasTopInput, onChange, value}) => {
  return (
    <Stack
      spacing={12}
      mt={2}
      sx={{marginLeft: "32px"}}
      // direction={"row"}
      // justifyContent={"space-between"}
    >
      <CustomCalendar
      //  hasTopInput={hasTopInput} 
      value={value} 
      onChange={onChange}/>
      {/* <CustomCalendar hasTopInput={hasTopInput}/> */}
    </Stack>
  );
};

export default DateRange;
