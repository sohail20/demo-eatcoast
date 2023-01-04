import React, { useState } from "react";
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
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import CustomCalendar from "../../Calendar/Calendar";

function Calendar(props) {
  const [selected, setSelected] = React.useState(null);

  return (
    <>
      <Drawer
        open={props.isDarwerOpen}
        onClose={() => props.setIsDarwerOpen(false)}
        anchor="right"
      >
        <Container
          sx={{
            width: { lg: "650px", md: "600px", sm: "400px", xs: "300px" },
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
                width: "576px",
                height: "48px",
              }}
              placeholder="2021/09/30"
            />

            <Box 
            sx={{
              width:'90%',
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
            <CustomCalendar/>
            </Box>
          </Box>
        </Container>
      </Drawer>
    </>
  );
}

export default Calendar;
