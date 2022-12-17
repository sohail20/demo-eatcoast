import React, { useContext, useState } from "react";
import {
  Box,
  IconButton,
  styled,
  Typography,
  Stack,
  Checkbox,
  Button,
  TextField,
} from "@mui/material";
import BackButton from "../../../Button/CustomIconButton";
import CloseIcon from "@mui/icons-material/Close";
import { AllDishesContext } from "components/Dishes/Context";

export const BackToDishes = () => {
   const {setOpenEditDish }  = useContext(AllDishesContext)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Button2 = styled(Button)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#FFFFFF",
    backgroundColor: "#2B817B",
    width: "147px",
    textTransform: "none",
    height: "40px",
    padding: "8px, 24px, 8px, 24px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
    },

    [theme.breakpoints.up("xl")]: {
        fontSize: "26px",
        width: "260px",
        height: "80px",
      },
    ":hover": {
      backgroundColor: "#2B817B",
    },
  }));


  const Title = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    letterSpacing: "0.015em",
    color: "#1A1824",
    
  }));

  const Typo1 = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "26px",
    color: "#000000",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "30px",
      },
  }));

  return (
    <>
      <Box>
        <Box display={"flex"} alignItems="center">
          <Box width="10%">
          <IconButton onClick={ () => setOpenEditDish(false)} aria-label="delete">
            <CloseIcon sx={{ color: "#E75C62", width: "24px", height: "24px" }} />
          </IconButton>
          </Box>
          <Box style={{ width: "80%", textAlign: "center" }}>
            <Title sx={{fontSize: {xl: "36px", lg: "20px", md: "20px", sm: "20px", xs: "16px"}}}>Add Dishes</Title>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", paddingTop: "46px" }}
        >
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center", width:"100%"}}>
            <Box sx={{display: "flex", justifyContent: "center", width: {xl: "500px", lg: "320px", md: "320px", sm: "320px", xs: "200px"}, height: {xl: "500px", lg: "300px", md: "300px", sm: "300px", xs: "180px"} }}>
              <img
                src="./images/MenuBg.png"
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
            </Box>

            <Box sx={{ paddingTop: "60px", display: "flex",
                justifyContent: "center", }}>
              <Typo1>Your dishes are under review, please wait</Typo1>
            </Box>

            <Box
              sx={{
                paddingTop: "50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button2 variant="contained" onClick={ () => setOpenEditDish(false)}autoFocus>
                Back to dishes
              </Button2>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
