import React from "react";
import {
  Typography,
  Box,
  Button,
  Avatar,
  IconButton,
  Grid,
  Container,
} from "@mui/material";
import { styled } from "@mui/material";
import { useState, useRef } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Drawer from "@mui/material/Drawer";
import add_icon from "../Images/add_icon.png";
import { ArrowBack, Add, PropaneSharp } from "@mui/icons-material";
import { AddIngridient } from "./AddIngridient/AddIngridient";
import CloseIcon from "@mui/icons-material/Close";



export const AddDishesDrawer = ({setOpenDrawer, openDrawer}) => {
  const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "600",
    color: "#1A1824;",
  }));

  const Para = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "400",
    color: "#1A1824;",
  }));
  const Btn = styled(Button)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "600",
    textTransform: "capitalize",
  }));

  const [checked, setChecked] = React.useState(false);
  const [word, setWord] = React.useState(0);
  const [disabled, setDisabled] = useState("disabled");
  const [mealCourses, setMealCourses] = useState("none");
  const [hidden, setHidden] = useState("flex");
  const meal_Courses = [];
  const [date, setDate] = useState(null);
  const getValue = (index, val) => {
    console.log(index);
  };
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  const handleClose = () => {
    alert("Working...");
  };
  const wordCoutn = (e) => {
    setWord(e.length);
    if (e.length > 10) {
      setDisabled("");
    } else {
      setDisabled("disabled");
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setAnchorEl(null);
    setOpenDrawer(false);
  };
  const showBox = () => {
    setMealCourses("block");
    setHidden("none");
  };
  let [mealPlan, setMealPlan] = useState([
    "Main Course",
    "Salad dishes",
    "Sweet dishes",
    "Sweet dishes",
    "Sweet dishes",
  ]);
  let [newPlan, setNewPlan] = useState("");

  const addMenu = () => {
    setMealPlan([...mealPlan, newPlan]);
  };
  const [addOn, setAddOn] = useState("flex");
  const [display, setDisplay] = useState("none");
  const showAdd_on = () => {
    setDisplay("block");
    setAddOn("none");
  };
  const [openCalendarDrawer, setOpenCalendarDrawer] = useState(false);

  const [anchorElCalendar, setAnchorElCalendar] = React.useState(null);
  const Open = Boolean(anchorElCalendar);
  const handleClickDarawer = (event) => {
    setAnchorElCalendar(event.currentTarget);
    setOpenCalendarDrawer(true);
  };
  const handleCloseCalendarDrawer = () => {
    setAnchorElCalendar(null);
    setOpenCalendarDrawer(false);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={openDrawer}
        width="100%"
        sx={{paddingLeft: "32px", paddingRight: "32px"}}
      >
        <Container
          sx={{
            width: { lg: "540px", md: "540px", sm: "540px", xs: "100%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "35px",
            // paddingLeft: "32px", paddingRight: "32px"
          }}
        >
          

        <IconButton onClick={handleCloseDrawer} aria-label="delete">
          <CloseIcon sx={{ fill: "#E75C62" }} />
        </IconButton>

          <Box>
            <Para
              sx={{
                fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "16px" },
                fontWeight: "600",
              }}
            >
              Add Ingridient
            </Para>
          </Box>
          <Box sx={{paddingRight: "10px"}}>
            <Btn
              sx={{
                padding: "10px 16px",
                backgroundColor: "#2B817B",
                color: "white",
                borderRadius: "4px",
                
              }}
            >
              Save
            </Btn>
          </Box>
        </Container>


        <Box><AddIngridient/></Box>

        




      </Drawer>
    </>
  );
};
