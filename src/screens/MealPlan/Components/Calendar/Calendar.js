import React,{useState} from "react";
import { BOx, Container, Typography,Drawer } from "@mui/material";

function Calendar(props) {
console.log(props.handleClickDarawer)
  
  return (
    

    <>
      <Drawer
        anchor="right"
        Open={props.handleClickDarawer}
        onClose={props.handleCloseCalendarDrawer}
        width="100%"
      >
        <Container
          sx={{
            width: { lg: "650px", md: "600px", sm: "400px", xs: "300px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 3,
          }}
        ></Container>
      </Drawer>
    </>
  );
}

export default Calendar;
