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

export const AddIngridient = ({ Data,  }) => {
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

  let [ingridient, setIngridient] = useState([]);

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
        <IngridientCard mealPlan={ingridient} Data={Data} />

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
        <CustomSearchBar
          onChangeProp={(e) => setNewIngridient(e.target.value)}
          placeholder={"Search your Ingridient"}
          icon={"./images/search-normal.svg"}
          bgColor={"#F6F6F6"}
          color={"#9EA3AE"}
          border={"2px solid #80B3B0"}
          height={"48px"}
          onClickIconBtn={handleButtonClick}
          borderColor={"#E1E1E6"}
          title={"Search"}
        />
      </Box>
    </Box>
  );
};
