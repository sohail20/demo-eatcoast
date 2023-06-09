import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from '@mui/material/Button';
import { Link, NavLink  } from "react-router-dom";
import { AllDishesContext } from "../Context";

import { useContext} from "react";



export default function MealCoursesCard() {
  const {setOpenAllDishes} = useContext(AllDishesContext)
  // const colors = useContext(ColorContext);

  const Data = [
    {
      title: "Main Course",
      subTitle: "No dishes added",
      image: "./images/MainCourse.svg",
    },
    {
      title: "Salad dishes",
      subTitle: "No dishes added",
      image: "./images/SaladDishes.svg",
    }
  ];


  const MainTypo = styled("div")(({ theme }) => ({
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
    color: "#9EA3AE",
    paddingBottom: "12px",
  }));

  const Typo1 = styled("div")(({ theme }) => ({
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
    color: "#000000",
    textDecoration: "none",
    [theme.breakpoints.down('sm')]:{
      fontSize: "12px",
  }
  }));

  const Typo2 = styled("div")(({ theme }) => ({
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    color: "#9EA3AE",
    [theme.breakpoints.down('sm')]:{
      fontSize: "12px",
  }
    // display: "flex",
    // alignItems: "center",
  }));

  const SubBox = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    padding: "20px",
    height: "96px",
    border: "1px solid #E1E1E6",
    borderRadius: "8px",
    marginBottom: "20px"
  }));

  const Typo3 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    color: "#2B817B",
    textDecoration: "underline",
    textTransform: "capitalize"
  }));
  return (
    <>
          
           
      <Box >
      <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Box><MainTypo>Meal Courses</MainTypo></Box>
        <Box >
           <Button> <Typo3>Edit</Typo3></Button >
        </Box>
        </Box>
        <Grid container>
        {Data.map((v, i) => {
                  return (
                    <>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
           {/* <NavLink to='/dishes' style={{textDecoration: "none"}}> */}
           <SubBox onClick={() => setOpenAllDishes(true)} sx={{cursor: "pointer"}} >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",

                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box sx={{ width: "56px", height: "56px" }}>
                    <img
                      src={v.image}
                      alt=""
                      width="100%"
                      height="auto"
                    />
                  </Box>
                  <Box sx={{ display: "flex", 
                  // textAlign: "center" 
                  }}>
                    <Typo1 sx={{ display: "flex", pl: "16px", textDecoration: "none"
                    // alignItems: "center" 
                    }}>
                      {v.title}
                    </Typo1>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <Typo2>{v.subTitle}</Typo2>
                  </Box>
                  <Box sx={{ pl: "29px", }}>
                    <img
                      src="./images/rightBlackArrow.svg"
                      alt=""
                      width="24px"
                      height="24px"
                    />
                  </Box>
                </Box>
              </Box>
            </SubBox>
           {/* </NavLink> */}
          </Grid>
          </>
                  );
                })}
        </Grid>
      </Box>
    </>
  );
}
