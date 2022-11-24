import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import CustomSearchBar from "./CustomSearchBar";
import searchNormal from "../../Images/search-normal.svg";
import { Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material";
import { Button, Avatar, IconButton, Grid, Container } from "@mui/material";
import IngridientCard from "./IngridientCard";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import AddIcon from "@mui/icons-material/Add";

export const AddIngridient = () => {
  const Data = [
    {
      id: 1,
      title: "Beef",
      digit: "*10",
      btnName: "Pcs",
      image: "./images/Beef.svg",
    },
    {
      id: 2,
      title: "Onion",
      digit: "*10",
      btnName: "Pcs",
      image: "./images/Beef.svg",
    },
  ];

  const Btn = styled(Button)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "600",
    textTransform: "capitalize",
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
    color: "#1A1824",
    display: "flex",
    alignItems: "center",
    paddingBottom: "8px",
  }));

  let [ingridient, setIngridient] = useState([
    // "Main Course",
    // "Salad dishes",
    // "Sweet dishes",
    // "Sweet dishes",
    // "Sweet dishes",
  ]);

  const addMenu = () => {
    setIngridient([...ingridient, newIngridient]);
  };
  let [newIngridient, setNewIngridient] = useState("");

  const [mealCourses, setMealCourses] = useState("none");
  const [hidden, setHidden] = useState("flex");
  const showBox = () => {
    setMealCourses("flex");
    setHidden("none");
  };

  const showBox2 = () => {
    setMealCourses("none");
    setHidden("block");
  };

  const handleButtonClick = () => {
    addMenu();
    showBox();
  };
  return (
    <Box
      sx={{
        paddingRight: {
          xl: "32px",
          lg: "32px",
          md: "32px",
          sm: "32px",
          xs: "10px",
        },
        paddingLeft: {
          xl: "32px",
          lg: "32px",
          md: "32px",
          sm: "32px",
          xs: "10px",
        },
        paddingTop: "35px",
      }}
    >
      <Box>
        {/* {mealPlan.map((item, index) => {
          return (
            <Typography>{item}</Typography> 
          )
        })} */}

        <IngridientCard mealPlan={ingridient} />

        <Btn
          onClick={showBox2}
          href="#"
          sx={{
            // display: hidden,
            display: mealCourses,
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            color: "#6A82CF",
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          Other
          <Box pl="8px" sx={{ display: "flex", alignItems: "center" }}>
            <AddIcon sx={{ width: "16px", height: "16px" }} />
          </Box>
        </Btn>
      </Box>

      <Box
        sx={{
          paddingLeft: {
            // xl: "32px",
            // lg: "32px",
            // md: "32px",
            // sm: "32px",
            // xs: "0px",
          },
          width: "100%",
          display: hidden,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Title>Search</Title>

          <Input
            // fullWidth
            width="476px"
            onChange={(e) => setNewIngridient(e.target.value)}
            disableUnderline="true"
            placeholder="Search your Ingridient"
            // onChange = {(e) => filterNames(e)}
            endAdornment={
              <InputAdornment position="start">
                <IconButton onClick={handleButtonClick}>
                  <img
                    src={"./images/search-normal.svg"}
                    sx={{
                      width: "17.75px",
                      height: "20.5px",
                    }}
                  />
                </IconButton>
              </InputAdornment>
            }
            sx={{
              // borderColor: "#E1E1E6",
              border: "2px solid #80B3B0",
              width: {
                xl: "478px",
                lg: "478px",
                md: "478px",
                sm: "478px",
                xs: "100%",
              },
              height: "48px",
              borderRadius: "6px",
              padding: "15px, 24px, 15px, 24px",
              gap: { lg: "16px", md: "16px", sm: "0px", xs: "0px" },
              backgroundColor: "#F6F6F6",
              color: "#9EA3AE",
              paddingLeft: "16px",
              // paddingRight: "18px",
            }}
          ></Input>
        </Box>
      </Box>
    </Box>
  );
};
