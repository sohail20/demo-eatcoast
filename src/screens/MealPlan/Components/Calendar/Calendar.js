import React, { useState,useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Drawer,
  Button,
  OutlinedInput,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import arrowLeft from "../../addMealPlan/Images/arrow-left.png";

import CustomCalendar from "../../Calendar/Calendar";
import { type } from "@testing-library/user-event/dist/type";

function Calendar(props) {
  const [selected, setSelected] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const monthList = [1,2,3,4,5,6,7,8,9,10,11,12]
  const stringDate = selectedDate?.toString();
  const [newDate, setNewDate] = useState('');
  
  

  const date = new Date();
  const Day = date.getDate();
  const getMonth = date.getMonth()
  const Month = monthList[getMonth]
  const Year = date.getFullYear()
 
  useEffect(()=>{
    
  setSelected(`${Day}/${Month}/${Year}`);
  setNewDate(stringDate);
   
  
  

  })
props.getDateFromCalendarfunc(newDate)
 

  return (
    <>
      <Drawer
        open={props.isDarwerOpen}
        onClose={() => props.setIsDarwerOpen(false)}
        anchor="right"
      >
        <Container
          sx={{
            width: {lg:'540px',md:'540px',sm:'450px',xs:'400px'},
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            marginTop: 3,
          }}
        >
          <Box sx={{ width: "100%" }} className="d-flex">
            <Button onClick={() => props.setIsDarwerOpen(false)}>
              <img src={arrowLeft} />
            </Button>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: { lg: "18px", md: "18px", sm: "14px", xs: "14px" },
              }}
            >
              Meal Plan End Date
            </Typography>
            <Button
            onClick={()=>props.setIsDarwerOpen(false)}
              sx={{
                backgroundColor: "#2B817B",
                color: "white",
                padding: "10px 16px",
                '&:hover':{backgroundColor:'#2B817B'}
              }}
              >
              Save
            </Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              marginTop: 10,
            }}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
              Date
            </Typography>
            <OutlinedInput
              sx={{
                backgroundColor: "#F6F6F6",
                padding: "14px 16px",
                border: "1px solid #E1E1E6",
                borderRadius: "6px",
                width: {lg:'476px',md:'476px',sm:'100%',xs:'100%'},
                height: "48px",
              }}
              placeholder={selected}
              value={newDate === null ? '' : newDate}
            />

            <Box 
            sx={{
              width:{lg:'476px',},
              margin:'10px auto 0px auto',
              border:'1px solid #E1E1E6',
              borderRadius:'8px',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              
            }}
            >
            {/* <DayPicker
              style={{ color: "#2B817B",}}
              mode="single"
              selected={selected}
              onSelect={setSelected}
            /> */}
            {/* <CalendarComponent/> */}
            <CustomCalendar setSelectedDate={setSelectedDate} />
            </Box>
          </Box>
        </Container>
      </Drawer>
    </>
  );
}

export default Calendar;
