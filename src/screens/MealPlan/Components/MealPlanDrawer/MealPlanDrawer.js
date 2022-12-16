import React, { useState } from "react";
import {
  Box,
  Drawer,
  OutlinedInput,
  Checkbox,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { styled } from "@mui/material";
import arrowLeft from '../Images/arrow-left-2.png';
import add_icon from '../Images/add_icon.png';

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

function MealPlanDrawer(props) {
  const [drawerMeal, setDrawerMeal] = useState([]);
  const [mealCourses, setMealCourses] = useState("none");
  const [hidden, setHidden] = useState("flex");
  const [disableInput, setDisableInput] = useState("disabled");
  const drawerCheckBoxList = (val) => {
    if(drawerMeal.includes(val)){
      const tmpArray = drawerMeal.filter((e) => e !== val);
      setDrawerMeal(tmpArray)
    }else{
      setDrawerMeal([...drawerMeal,val])

    }
    // if (drawerMeal.length !== "") {
    //   setDisableInput("");
    // } else {
    //   setDisableInput("disabled");
    // }
  
  };
 

  // Funtion for drawer input created here
  const showBox = () => {
    setMealCourses("block");
    setHidden("none");
  };
  // Drawer Meal Plan state created here
  let [mealPlan, setMealPlan] = useState([
    "Main Course",
    "Salad dishes",
    "Sweet dishes",
    "Sweet dishes",
    "Sweet dishes",
  ]);

  // Drawer add on funtionality created here
  const [addOn, setAddOn] = useState("flex");
  const [display, setDisplay] = useState("none");
  const showAdd_on = () => {
    setDisplay("block");
    setAddOn("none");
  };
  // Adding meal plan to list functionality created here

  let [newPlan, setNewPlan] = useState("");

  const addMenu = () => {
    setMealPlan([...mealPlan, newPlan]);
  };
  props.geteValuesFromDrawerfunc(drawerMeal)
    
  const closeDrawer =()=>{
   
    props.setOpenDrawer(false);
  }
  return (
    <>
      <Drawer
        anchor="right"
        open={props.openDrawer}
        onClose={props.setOpenDrawer}
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
          <Button onClick={ closeDrawer}>
            <img src={arrowLeft} alt="arrow icon" />
          </Button>
          <Box>
            <Para
              sx={{
                fontSize: { xs: "16px",md:"18px" },
                fontWeight: "600",
              }}
            >
              Meal Plan
            </Para>
          </Box>
          <Box>
            <Btn
              onClick={()=>props.setOpenDrawer(false)}
              sx={{
                padding: "10px 16px",
                backgroundColor: "#2B817B",
                color: "white",
                borderRadius: "4px",
                '&:hover':{backgroundColor:"#2B817B"}
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
                  <Checkbox
                    onChange={(e) => drawerCheckBoxList(e.target.value)}
                    value={item}
                  />
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
                  <Checkbox
                    value={item}
                    onChange={(e) => drawerCheckBoxList(e.target.value)}
                  />
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
    </>
  );
}

export default MealPlanDrawer;
