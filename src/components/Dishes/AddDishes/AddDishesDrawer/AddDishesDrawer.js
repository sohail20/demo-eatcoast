import React, { useState } from "react";
import {
  Box,
  Container,
  IconButton,
  Button,
  Typography,
  styled
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { AddIngridient } from "./AddIngridient/AddIngridient";
import { addNutrition } from "components/Menu/DishesMenu/configdishes";
import CustomCalendar from "components/Calendar/Calendar";
import CloseIcon from "@mui/icons-material/Close";

const Para = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: "400",
  color: "#1A1824",
}));

const Btn = styled(Button)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: "600",
  textTransform: "capitalize",
}));

const addIngredient = [
  {
    id: 1,
    name: "Beef",
    image: "./images/beef.svg",
    quantity: 1,
    unit: "gr"
  },
  {
    id: 2,
    name: "Olive Oil",
    image: "./images/OliveOil.svg",
    quantity: 6,
    unit: "gr"
  },
  {
    id: 3,
    name: "Garlic Clover",
    image: "./images/Garilic.svg",
    quantity: 1,
    unit: "gr"
  },
  {
    id: 4,
    name: "Small Onion",
    image: "./images/smallOninon.svg",
    quantity: 1,
    unit: "gr"
  },
  {
    id: 5,
    name: "All Spice",
    image: "./images/allSpice.svg",
    quantity: 1,
    unit: "gr"
  },
  {
    id: 6,
    name: "Tomato Pasta",
    image: "./images/tomato.svg",
    quantity: 1,
    unit: "gr"
  },
];



export const AddDishesDrawer = ({ type, handleSubmit, setOpenDrawer, openDrawer, title, }) => {
  const [date, setDate] = useState("")
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={openDrawer}
      // width="100%"
      // sx={{paddingLeft: "32px", paddingRight: "32px"}}
      >
        {type === "datePicker" ?
          <Box
            pl={2}
            pr={2}
            sx={{
              width: { lg: "540px", md: "540px", sm: "540px", xs: "100%" }
            }}
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
              <IconButton aria-label="delete" onClick={handleCloseDrawer}>
                <CloseIcon sx={{ fill: "#E75C62" }} />
              </IconButton>

              <Box>
                <Para
                  sx={{
                    fontSize: { lg: "18px", md: "18px", sm: "16px", xs: "16px" },
                    fontWeight: "600",
                  }}
                >
                  {title}
                </Para>
              </Box>
              <Box sx={{ paddingRight: "10px" }}>
                <Btn
                  sx={{
                    padding: "10px 16px",
                    backgroundColor: "#2B817B",
                    color: "white",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "#2B817B"
                    }
                  }}
                  onClick={() => {
                    handleSubmit(date)
                    handleCloseDrawer()
                  }}
                >
                  Save
                </Btn>
              </Box>
            </Container>
            <CustomCalendar hasTopInput handleOnSelect={(e) => setDate(e)} />
          </Box>
          : <Box>
            <AddIngridient
              title={title}
              handleUpdateData={(e) => {
                handleSubmit(e)
                handleCloseDrawer()
              }}
              type={type}
              handleClose={handleCloseDrawer}
              data={type === "ingredient" ? addIngredient : addNutrition}
            />
          </Box>}
      </Drawer>
    </>
  );
};












