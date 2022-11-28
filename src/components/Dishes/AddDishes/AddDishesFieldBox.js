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
import arrowRight from "./Images/arrow-right.svg";
import { CustomSelectInputField } from "./CustomSelectInputField";
import SwitchButton from "./SwitchButton";
import { AddDishesDrawer } from "./AddDishesDrawer/AddDishesDrawer";
import { AddIngridient } from "./AddDishesDrawer/AddIngridient/AddIngridient";
import { Data } from "../Config";
import { Data2 } from "../Config";
import { ScheduledDishes } from "./AddDishesDrawer/ScheduledDishes/ScheduledDishes";

export const AddDishesFieldBox = ({ props, disabled, setDisabled }) => {
  const [placeholderSched, setPlaceholderSched] = useState(false);
  const [placeholderIngri, setPlaceholderIngri] = useState(false);
  const [placeholderNutri, setPlaceholderNutri] = useState(false);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [value, onChange] = useState(new Date());
  console.log("value", value);

  let day = weekday[value.getDay()];
  console.log("day", day);

  let newdate = value.getDate();
  console.log("date", newdate);

  let fullyear = value.getFullYear();
  console.log("fullyear", fullyear);

  let month = value.getMonth();
  console.log("month", month + 1);

  const allData = day + " " + newdate + "/" + month + "/" + fullyear;
  console.log("alldata", allData);
  console.log("value", value.allData);

  // const [disabled, setDisabled] = useState("disabled");

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
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);
  const [openDrawer3, setOpenDrawer3] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenDrawer(true);
    setPlaceholderIngri(true);
  };

  const handleClickNutritionDrawer = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenDrawer2(true);
    setPlaceholderNutri(true);
  };

  const handleClickScheduledDrawer = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenDrawer3(true);
    setPlaceholderSched(true);
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
    // "Main Course",
    // "Salad dishes",
    // "Sweet dishes",
    // "Sweet dishes",
    // "Sweet dishes",
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
        className="meal"
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
          justifyContent: "space-between",
          border: "1px solid #E1E1E6",
          borderRadius: "8px",
          padding: "32px",
        }}
      >
        <Box
          sx={{
            // width: { lg: "40%", md: "40%", sm: "40%", xs: "90%" }
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={profile} />

            <Box sx={{ paddingLeft: "32px" }}>
              <Para
                sx={{
                  width: {
                    // xl: "230px",
                    // lg: "230px",
                    // md: "230px",
                    // sm: "230px",
                    // xs: "60%",
                  },
                  color: "#9EA3AE;",
                  fontSize: "14px",
                  lineHeight: "20px",

                  // margin: 2,
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
                  textTransform: "capitalize",
                }}
              >
                <input hidden accept="image/*" type="file" />
                <img src={add} />
                Add photo
              </Button>
            </Box>
          </Box>

          <Para sx={{ fontSize: "16px", fontWeight: "500", mb: "8px" }}>
            Dish name
          </Para>
          <OutlinedInput
            placeholder="Enter Dish name"
            sx={{ backgroundColor: "#F6F6F6", width: "100%", height: "48px" }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Para
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                marginTop: "9px",
                mb: "8px",
              }}
            >
              Description
            </Para>
            <Para
              sx={{ marginTop: "9px", fontSize: "14px", fontWeight: "500" }}
            >
              {word}/80
            </Para>
          </Box>

          <OutlinedInput
            fullWidth
            inputProps={{ maxLength: 80 }}
            maxLength="80"
            onChange={(e) => wordCoutn(e.target.value)}
            components="input"
            placeholder="Description"
            sx={{
              backgroundColor: "#F6F6F6",
              width: "100%",
              height: "144px",
              alignItems: "flex-start",
            }}
          />
        </Box>
        <Box
          sx={{
            // width: { lg: "40%", md: "40%", sm: "40%", xs: "90%" }
            width: "100%",
            marginLeft: {
              xl: "20px",
              lg: "20px",
              md: "20px",
              sm: "20px",
              xs: "0px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "40%",
              paddingRight: { xl: "10%" },
            }}
          >
            <Box sx={{ paddingBottom: "57px" }}>
              <Para
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#000000",
                }}
              >
                Status :
              </Para>
              <Para
                sx={{
                  width: { lg: "400px", md: "300px", sm: "200px", xs: "200px" },
                  color: " #9EA3AE;",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                *If the plate is active it will be visible to the customer
              </Para>
            </Box>
            <Box>
              <SwitchButton />
            </Box>
          </Box>
          <Box>
            {Data.map((item) => {
              return (
                <CustomSelectInputField
                  handleClick={handleClick}
                  title={"Ingridients "}
                  subTitle={"( Optional )"}
                  className={"mealInput mealCourses"}
                  placeholder={
                    placeholderIngri ? `${item.title}` : "Select ingridients"
                  }
                  // placeholder={item.title}
                  disabled={true}
                  icon={arrowRight}
                />
              );
            })}
          </Box>
          <Box sx={{ mt: "8px" }}>
            {Data.map((item) => {
              return (
                <CustomSelectInputField
                  mt="9px"
                  handleClick={handleClickNutritionDrawer}
                  title={"Nutritional information "}
                  subTitle={"( Optional )"}
                  className={"mealInput mealCourses"}
                  // placeholder={"Select nutritional info"}
                  placeholder={
                    placeholderNutri
                      ? `${item.title}`
                      : "Select scheduled dishes"
                  }
                  disabled={true}
                  icon={arrowRight}
                />
              );
            })}
          </Box>
          <Box sx={{ mt: "8px" }}>
            <CustomSelectInputField
              handleClick={handleClickScheduledDrawer}
              title={"Scheduled dishes "}
              subTitle={"( Optional )"}
              className={"mealInput mealCourses"}
              // placeholder={"Select scheduled dishes"}
              // placeholder={allData}
              placeholder={
                placeholderSched ? allData : "Select scheduled dishes"
              }
              disabled={true}
              icon={arrowRight}
              // onChange={allData}
              // primary={allData}
            />
          </Box>
        </Box>
      </Box>
      {/* create state, then use ternary operator, then deal it with on open drawer onclick where it will be true */}

      <Box>
        <AddDishesDrawer
          setOpenDrawer={setOpenDrawer}
          // setPlaceholderSched={setPlaceholderSched}
          openDrawer={openDrawer}
          Component={<AddIngridient Data={Data} />}
          title={"Add Ingridient"}
        />
      </Box>
      <Box>
        <AddDishesDrawer
          setOpenDrawer={setOpenDrawer2}
          openDrawer={openDrawer2}
          Component={<AddIngridient Data={Data2} />}
          title={"Add Nutritional Info"}
        />
      </Box>
      <Box>
        <AddDishesDrawer
          setOpenDrawer={setOpenDrawer3}
          openDrawer={openDrawer3}
          Component={
            <ScheduledDishes
              onChange={onChange}
              value={value}
              allData={allData}
            />
          }
          title={"Dish Schedule"}
        />
      </Box>
    </>
  );
};
