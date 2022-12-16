import React,{useEffect} from "react";
import {
  Typography,
  Box,
  Button,
  Avatar,
  IconButton,
  Grid,
  Container,
  Backdrop,
} from "@mui/material";
import { styled } from "@mui/material";
import profile from "./Images/profile.png";
import add from "./Images/add.png";
import Switch from "@mui/material/Switch";
import { useState, useRef } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Drawer from "@mui/material/Drawer";
import arrowLeft from "./Images/arrow-left.png";
import add_icon from "./Images/add_icon.png";
import Link from "@mui/material/Link";
import { ArrowBack, Add, PropaneSharp } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import calender from "./Images/calendar.png";
import vector from "./Images/Vector.png";
import Overlay from "../Overlay/Overlay";
import Calendar from "../Components/Calendar/Calendar";
import "./style.css";
import MealPlanCheckBo from "../Components/MealPlanCheckBoxes/MealPlanCheckbox";
import MealPlanDrawer from "../Components/MealPlanDrawer/MealPlanDrawer";

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

function AddMealPlan(porops) {

  const [checked, setChecked] = React.useState(false);
  const [word, setWord] = React.useState(0);
  const [MealValu, setMealValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [disabled, setDisabled] = useState("disabled");
  const [drawerMeal, setDrawerMeal] = useState([]);
  const [disableInput, setDisableInput] = useState("disabled");
  const [disabledDate, setDisabledDate] = useState('disabled')

  const removeAllValues = ()=>{
    setMealValue('');
    setDescriptionValue('');
    setDrawerMeal(['']);
    setInputVal('');
    setDateValue('')
  }
 

  // Switch Button Function created here
  const handleChange = (e) => {
    setChecked(e.target.checked);
    alert("Switched on");
  };
  // Close Button function created here
  const handleClose = () => {
    alert("Working...");
  };

  // Submit Button Disbable and unable funtionality created here

  const wordCount = (e) => {
    setDescriptionValue(e.target.value);
    setWord(e.target.value.length);
    if (MealValu.length >= 10 && descriptionValue.length >= 10) {
      setDisabled("");
    } else {
      setDisabled("disabled");
    }
  };

  // Drawer funtionality created here

  const [openDrawer, setOpenDrawer] = useState(false);
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

  // Clander Drawer functionality created here
  const [isDarwerOpen, setIsDrawerOpen] = useState(false);
  const [anchorElCalendar, setAnchorElCalendar] = React.useState(null);
  const Open = Boolean(anchorElCalendar);

  const open_Drawer = (event) => {
    setAnchorElCalendar(event.currentTarget);
    setIsDrawerOpen(true);
  };

  const close_Drawer = () => {
    setIsDrawerOpen(false);
  };

  // Drawer Close Buttion function here

 

  
  // Save as draft button state and functions

  const [isOpen, setIsOpen] = useState(false);

  let [inputVal,setInputVal] = useState('');

  let [dateValue, setDateValue] = useState('')

  
  const geteValuesFromDrawer = ((val)=>{
    const promise = new Promise((resolve,reject)=>{
      
      resolve(val)

      reject('did not get data from component')

    })

    promise.then((response)=>{
      setInputVal(response);
      setDisableInput('')

    }).catch((error)=>{
      console.log(error)

    })

    
   
   

  })

 
 const getDateFromCalendar = (val)=>{
  const promise = new Promise((resolve,reject)=>{
    resolve(val)
    reject('Did not get date from calender component')
  })
  promise.then((response)=>{
    setDateValue(response);
    setDisabledDate('')
  }).catch((error)=>{
    console.log(error)
  })

 }
let monthList = [1,2,3,4,5,6,7,8,9,10,11,12];
 let date = new Date();
 let day = date.getDate();
 let year = date.getFullYear();
 let month = monthList[date.getMonth()];
 let fullDate = `${year}/${month}/${day}`;

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin:'10px 20px 0px 20px'
        }}
        className="mainContainer"
      >
        <Button onClick={handleClose}>
          <img src={require("./Images/close.png")} />
        </Button>
        <Box>
          <Heading
            sx={{
              fontSize: { lg: "20px", md: "20px", sm: "16px", xs: "16px" },
            }}
            className="heading"
          >
            Add Meal Plan
          </Heading>
        </Box>
        <Box  className="btnContainer">
          <Btn
            onClick={()=> setIsOpen(true)}
            sx={{
              backgroundColor: "#FFFFFF",
              padding: "10px 16px",
              height: "40px",
              color: "#2B817B;",
              border: "1px solid  #80B3B0",
              borderRadius: "4px",
              marginRight: 2,
            }}
          >
            Save as Draft
          </Btn>
          <Btn
            sx={{
              height: "40px",
              backgroundColor: disabled == "disabled" ? "#D5E6E5;" : "#2B817B",
              padding: "10px 16px",
              color: "white",
              width: "120px",
              borderRadius: "4px",
            }}
            disabled={disabled}
          >
            Submit
          </Btn>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin:'10px 40px 0px 40px',
          flexWrap: "wrap",
         
        }}
        component="div"
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={profile} />

          <Box>
            <Para
              sx={{
                width: "230px",
                color: "#9EA3AE;",
                fontSize: "14px",
                margin: 2,
              }}
            >
              *uploaded photos are 1 : 1 in size and a maximum of 2 mb
            </Para>
            <Button
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{
                color: "#2B817B;",
                fontFamily: "Outfit",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              <input hidden accept="image/*" type="file" />
              <img src={add} />
              Add photo
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "40%",
         
          }}
        >
          <Box>
            <Para
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#000000",
              }}
            >
              Send for review
            </Para>
            <Para
              sx={{
                width: { lg: "400px", md: "300px", sm: "200px", xs: "200px" },
                color: " #9EA3AE;",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              *when the toggle switch is on, the menu will be sent to admin for
              review and once done the menu will show
            </Para>
          </Box>
          <Box>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        className="meal"
        sx={{ display: "flex", justifyContent: "space-between",margin:'10px 40px 0px 40px' }}
      >
        <Box sx={{ width: { lg: "40%", md: "40%", sm: "40%", xs: "90%" } }}>
          <Para sx={{ fontSize: "16px", fontWeight: "600", marginTop: 2 }}>
            Meal Plan
          </Para>
          <OutlinedInput
            name="meal plan"
            onChange={(e) => setMealValue(e.target.value)}
            className="mealInput"
            placeholder="Enter Meal Plan"
            sx={{ backgroundColor: "#F6F6F6", width: "100%",height:'48px', marginTop:1 }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Para sx={{ fontSize: "16px", fontWeight: "600", marginTop: 2 }}>
              Description
            </Para>
            <Para sx={{ marginTop: 2, fontSize: "14px", fontWeight: "500" }}>
              {word}/80
            </Para>
          </Box>

          <OutlinedInput
            inputProps={{ maxLength: 80 }}
            multiline={4}
            name="description"
            className="mealInput"
            maxLength="80"
            onChange={(e) => wordCount(e)}
            components="input"
            placeholder="Description"
            sx={{ backgroundColor: "#F6F6F6", width: "100%", height: "96px",marginTop:1 }}
          />
        </Box>
        <Box sx={{ width: { lg: "40%", md: "40%", sm: "40%", xs: "90%" } }}>
          <Para sx={{ fontSize: "16px", fontWeight: "600" }}>Meal Courses</Para>
          <OutlinedInput
            inputProps={{ maxLength: 0 }}
            endAdornment={
              <InputAdornment position="end">
                <img src={vector} />
              </InputAdornment>
            }
            value={inputVal}
            onClick={drawerMeal == "" ? handleClick : null}
            disabled={disableInput}
            className="mealInput mealCourses"
            placeholder="Enter Meal Courses"
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              fontWeight: drawerMeal == "" ? undefined : "600",
              color: "black",
              height:'48px',
              marginTop:1
            }}
          />
          <Para sx={{ fontSize: "16px", fontWeight: "600", marginTop: 2 }}>
            Meal Plan End Date
          </Para>
          <OutlinedInput
            placeholder={fullDate}
            endAdornment={
              <InputAdornment position="end">
                <img src={calender} />
              </InputAdornment>
            }
            onClick={() => setIsDrawerOpen(true)}
            className="mealInput"
            sx={{ backgroundColor: "#F6F6F6", width: "100%",height:'48px',marginTop:1 }}
            disabled={disabledDate}
            value={dateValue}
          />
        </Box>
      </Box>
      <Para sx={{ fontSize: "16px", fontWeight: "600", margin:'10px 40px 0px 40px' }}>
      Category
      </Para>

    <MealPlanDrawer geteValuesFromDrawerfunc={geteValuesFromDrawer}  openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

      <MealPlanCheckBo />

      

      {/* Calendar Drawer Created here */}

      <Calendar getDateFromCalendarfunc={getDateFromCalendar} isDarwerOpen={isDarwerOpen} setIsDarwerOpen={setIsDrawerOpen} />
      <Overlay removeAllValuesfunc={removeAllValues} isOpenFunc={isOpen} setIsOpenFunc={setIsOpen} />
     
    </>
  );
}

export default AddMealPlan;
