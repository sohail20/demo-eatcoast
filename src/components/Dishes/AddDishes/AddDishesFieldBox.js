import React, { useEffect, useState, useRef } from "react";
import {
  Typography,
  Box,
  Button,
} from "@mui/material";
import { styled } from "@mui/material";
import profile from "./Images/profile.png";
import add from "./Images/add.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import arrowRight from "./Images/arrow-right.svg";
import { CustomSelectInputField } from "./CustomSelectInputField";
import SwitchButton from "./SwitchButton";
import { AddDishesDrawer } from "./AddDishesDrawer/AddDishesDrawer";
import { Data } from "../Config";
import { ScheduledDishes } from "./AddDishesDrawer/ScheduledDishes/ScheduledDishes";
import { useFormik } from "formik";

export const addNutrition = [
  {
    id: 1,
    name: "Vitamin A",
    image: "./images/vitamin.svg",
    quantity: 1,
    unit: "Gr"
  },
  {
    id: 2,
    name: "Vitamin B",
    image: "./images/vitamin.svg",
    quantity: 1,
    unit: "Gr"
  },
  {
    id: 3,
    name: "Vitamin C",
    image: "./images/vitamin.svg",
    quantity: 1,
    unit: "Gr"
  },
];

export const AddDishesFieldBox = ({ formik }) => {
  const [image, setImage] = useState("./images/image profile.svg");
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

  let day = weekday[value.getDay()];

  let newdate = value.getDate();

  let fullyear = value.getFullYear();

  let month = value.getMonth();

  const allData = day + " " + newdate + "/" + month + "/" + fullyear;

  const Para = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "400",
    color: "#1A1824;",
  }));

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

  useEffect(() => {
    if (formik.values.image !== "") {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(formik.values.image);
    }
  }, [formik]);

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
            <img
              src={image}
              style={{ width: "96px", height: "97px" }}
            />
            <Box sx={{ paddingLeft: "32px" }}>
              <Para
                sx={{
                  color: "#9EA3AE;",
                  fontSize: "14px",
                  lineHeight: "20px",
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
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(event) => {
                    formik.setFieldValue("image", event.currentTarget.files[0]);
                  }}
                />
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
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
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
              {formik.values.description.length}/80
            </Para>
          </Box>

          <OutlinedInput
            fullWidth
            inputProps={{ maxLength: 80 }}
            maxLength="80"
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
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
              <SwitchButton
                id="forReview"
                name="forReview"
                checked={formik.values.forReview}
                onChange={(event) => {
                  formik.setFieldValue("forReview", event.target.checked);
                }}
              />
            </Box>
          </Box>
          <Box>
            <CustomSelectInputField
              handleClick={handleClick}
              title={"Ingridients "}
              subTitle={"( Optional )"}
              className={"mealInput mealCourses"}
              placeholder={"Select ingridients"}
              disabled={true}
              icon={arrowRight}
            />
          </Box>
          <Box sx={{ mt: "8px" }}>
            <CustomSelectInputField
              mt="9px"
              handleClick={handleClickNutritionDrawer}
              title={"Nutritional information "}
              subTitle={"( Optional )"}
              className={"mealInput mealCourses"}
              placeholder={"Select scheduled dishes"}
              value={formik.values.ingredient.join(",")}
              disabled={true}
              icon={arrowRight}
            />
          </Box>
          <Box sx={{ mt: "8px" }}>
            <CustomSelectInputField
              handleClick={handleClickScheduledDrawer}
              title={"Scheduled dishes "}
              subTitle={"( Optional )"}
              className={"mealInput mealCourses"}
              placeholder={"Select scheduled dishes"}
              value={formik.values.nutritionInformation.join(",")}
              disabled={true}
              icon={arrowRight}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <AddDishesDrawer
          setOpenDrawer={setOpenDrawer}
          openDrawer={openDrawer}
          type={"ingridient"}
          title={"Add Ingridient"}
          handleSubmit={(value) => {
            formik.setFieldValue("ingredient", value);
          }}
        />
      </Box>
      <Box>
        <AddDishesDrawer
          setOpenDrawer={setOpenDrawer2}
          openDrawer={openDrawer2}
          type="nutritions"
          title={"Add Nutritional Info"}
          handleSubmit={(value) => {
            formik.setFieldValue("nutritionInformation", value);
          }}
        />
      </Box>
      <Box>
        <AddDishesDrawer
          setOpenDrawer={setOpenDrawer3}
          openDrawer={openDrawer3}
          type={"datePicker"}
          title={"Dish Schedule"}
          handleSubmit={(e) => {
            console.log("eeeee", e)
          }}
        />
      </Box>
    </>
  );
};
