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
import Calendar from "../Components/Calendar/Calendar";

import "./style.css";
import CustomTextInputField from "../../../styles/CustomTextInputField";

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

function AddMealPlan(props) {
  const {setIsShowAddMealPlanScreenFunc} = props

  const [checked, setChecked] = React.useState(false);
  const [word, setWord] = React.useState(0);
  const [disabled, setDisabled] = useState("disabled");
  const [mealCourses, setMealCourses] = useState("none");
  const [hidden, setHidden] = useState("flex");
  const meal_Courses = [];
  const [date, setDate] = useState(null);
  const getValue = (index,val) => {
    console.log(index);
    
    

    
  
  };
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  const handleClose = () => {
    // alert("Working...");
    setIsShowAddMealPlanScreenFunc(false)
  };
  const wordCoutn = (e) => {
    setWord(e.length);
    if (e.length > 10) {
      setDisabled("");
    } else {
      setDisabled("disabled");
    }
  };
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
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
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
        <Box className="btnContainer">
          <Btn
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
          mt: 5,
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
        sx={{ marginTop: 2, display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ width: { lg: "40%", md: "40%", sm: "40%", xs: "90%" } }}>
          <Para sx={{ fontSize: "16px", fontWeight: "600", marginTop: 1 }}>
            Meal Plan
          </Para>
          <OutlinedInput
            className="mealInput"
            placeholder="Enter Meal Plan"
            sx={{ backgroundColor: "#F6F6F6", width: "100%", }}
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
            className="mealInput"
            maxLength="80"
            onChange={(e) => wordCoutn(e.target.value)}
            components="input"
            placeholder="Description"
            sx={{ backgroundColor: "#F6F6F6", width: "100%", height: "96px" }}
          />
        </Box>
        <Box sx={{ width: { lg: "40%", md: "40%", sm: "40%", xs: "90%" } }}>
          <Para sx={{ fontSize: "16px", fontWeight: "600" }}>Meal Courses</Para>
          <OutlinedInput
            onClick={handleClick}
            disabled
            className="mealInput mealCourses"
            placeholder="Enter Meal Courses"
            sx={{ backgroundColor: "#F6F6F6", width: "100%" }}
          />
          <Para sx={{ fontSize: "16px", fontWeight: "600", marginTop: 2 }}>
            Meal Plan End Date
          </Para>
          <OutlinedInput
          onClick={props.handleClickDarawer}
            className="mealInput"
            // onChange={(e) => setDate(e.currentTarget.value)}
            type="date"
            sx={{ backgroundColor: "#F6F6F6", width: "100%" }}
          />
        </Box>
      </Box>
      <Para sx={{ fontSize: "16px", fontWeight: "600", marginTop: 2 }}>
        Meal Courses
      </Para>

      <Box
        sx={{
          marginTop: 2,
          border: "1px solid #E1E1E6",
          padding: "12px 20px",
          borderRadius: "8px",
          minHeight: "120px",
        }}
      >
        <Box>
          <Grid container spacing={2}>
            {[
              { title: "Vegetarian" },
              { title: "Vegan" },
              { title: "Halal" },
              { title: "Gluten - friendly" },
              {title:"Prescetarian"},
               {title:"Low-crab"},
               {title:"Diery-free"},
                {title:"Lactose-free"}
            ].map((item, index) => {
              return (
                <Grid key={index} lg={3} md={3} sm={6} xs={6} item>
                  <Box>
                    <Checkbox
                      value={item.title}
                      onChange={(e) => getValue(index,item.title)}
                    />
                    {item.title}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* <Grid container spacing={2}>
          {[{title:"Prescetarian"}, {title:"Low-crab"}, {title:"Diery-free"}, {title:"Lactose-free"}].map(
            (item, index) => {
              return (
                <Grid key={index} lg={3} md={3} sm={6} xs={6} item>
                  <Box>
                    <Checkbox value={item.title} onChange={(e)=>e.curtentTarget.value} />
                    {item}
                  </Box>
                </Grid>
              );
            }
          )}
        </Grid> */}
      </Box>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={openDrawer}
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
        >
          <Button onClick={handleCloseDrawer}>
            <ArrowBack />
          </Button>
          <Box>
            <Para
              sx={{
                fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "16px" },
                fontWeight: "600",
              }}
            >
              Meal Plan
            </Para>
          </Box>
          <Box>
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
        <Box
          sx={{
            border: "1px solid #E1E1E6",
            margin: "40px 20px 0px 20px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            padding: "24px 32px",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              border: "1px solid #E1E1E6",
              width: "100%",
              borderRadius: "4px",
            }}
          >
            <Para
              sx={{
                color: "#9EA3AE",
                fontSize: "15px",
                fontWeight: "500",
                textAlign: "left",
                padding: "10px",
              }}
            >
              Meal Courses
            </Para>
            {mealPlan.map((item, inde) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px",
                  }}
                >
                  <Para sx={{ fontSize: "16px", fontWeight: "600" }}>
                    {item}
                  </Para>
                  <Checkbox />
                </Box>
              );
            })}
            <Btn
              onClick={showBox}
              href="#"
              sx={{
                display: hidden,
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                color: "#6A82CF",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              {" "}
              Other
              <img src={add_icon} />{" "}
            </Btn>

            <Box
              sx={{
                marign: "0 atuo 0 auto",
                width: "100%",
                display: mealCourses,
              }}
            >
              <OutlinedInput
                onChange={(e) => setNewPlan(e.target.value)}
                placeholder="Type your meal plan"
                sx={{
                  backgroundColor: "#F6F6F6",
                  padding: "10px 16px",
                  height: "40px",
                  width: "80%",
                  margin: "10px",
                }}
              />
              <Btn
                onClick={addMenu}
                sx={{
                  backgroundColor: "#2B817B;",
                  color: "white",
                  // padding:'10px 16px',
                  borderRadius: "4px",
                }}
              >
                {" "}
                Add
              </Btn>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #E1E1E6",
              width: "100%",
              borderRadius: "4px",
              marginTop: 2,
            }}
          >
            <Para
              sx={{
                color: "#9EA3AE",
                fontSize: "15px",
                fontWeight: "500",
                textAlign: "left",
                padding: "10px",
              }}
            >
              Add-ons
            </Para>
            {["Dips", "Side", "Juice"].map((item, index) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px",
                  }}
                >
                  <Para sx={{ fontSize: "16px", fontWeight: "600" }}>
                    {item}
                  </Para>
                  <Checkbox />
                </Box>
              );
            })}
            <center>
              <Btn
                onClick={showAdd_on}
                sx={{
                  display: addOn,
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  color: "#6A82CF",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                {" "}
                Other
                <img src={add_icon} />{" "}
              </Btn>

              <Box
                sx={{ display: "flex", alignItems: "center", display: display }}
              >
                <OutlinedInput
                  placeholder="Type you add-ons"
                  sx={{
                    backgroundColor: "#F6F6F6",
                    padding: "10px 16px",
                    height: "40px",
                    width: "80%",
                    margin: "10px",
                  }}
                />
                <Btn
                  sx={{
                    backgroundColor: "#2B817B;",
                    color: "white",

                    borderRadius: "4px",
                  }}
                >
                  {" "}
                  Add
                </Btn>
              </Box>
            </center>
          </Box>
        </Box>
      </Drawer>
      <Calendar
       handleClickDarawer={handleClickDarawer}
       handleCloseCalendarDrawer={handleCloseCalendarDrawer} />

    
       
    </>
  );
}

export default AddMealPlan;
