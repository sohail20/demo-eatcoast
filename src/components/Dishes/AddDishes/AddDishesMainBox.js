import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import SwitchButton from "./SwitchButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";

export default function AddDishesMainBox() {
  const Typo1 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    color: "#9EA3AE",
  }));

  const Typo2 = styled(Typography)(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
  }));

  const MainBox = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    padding: "32px",
    border: "1px solid #E1E1E6",
    borderRadius: "8px",
    height: { lg: "426px", md: "426px", sm: "auto", xs: "auto" },
  }));

  const Button1 = styled(Button)(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#2B817B",
  }));

  return (
    <>
      <MainBox
        sx={{
          display: "flex",
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
          width: { lg: "1036px", md: "100%", sm: "100%", xs: "100%" },
        }}
      >
        <Box width="100%">
          <Box width="100%" sx={{ display: "flex" }}>
            <Box>
              <img src="./images/image profile.svg" alt="" />
            </Box>
            <Box sx={{ ml: "32px" }}>
              <Box>
                <Typo1 sx={{ maxWidth: "230px", pb: "18px" }}>
                  *uploaded photos are 1 : 1 in size and a maximum of 2 mb
                </Typo1>
              </Box>
              <Box>
                <Button1 variant="text" startIcon={<AddIcon />}>
                  Add photo
                </Button1>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box sx={{ pt: "9px", pb: "8px" }}>
              <Typo2>Dish name</Typo2>
            </Box>
            <Box>
              <TextField
                fullWidth
                id="filled-textarea"
                placeholder="Enter Dish name"
                variant="outlined"
                InputProps={{
                  style: {
                    height: "48px",
                  },
                }}
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  borderRadius: "6px",
                  border: "1px solid #E1E1E6",
                  backgroundColor: "#F6F6F6",
                  color: "#9EA3AE",
                }}
              />
            </Box>
          </Box>

          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ pt: "9px", pb: "8px" }}>
                <Typo2>Description</Typo2>
              </Box>
              <Box sx={{ pt: "9px", pb: "8px" }}>
                <Typo2 color="#9EA3AE">0/80</Typo2>
              </Box>
            </Box>
            <Box>
              <TextField
                fullWidth
                id="filled-textarea"
                placeholder="Description"
                variant="outlined"
                // multiline
                // rows={4}
                InputProps={{
                  style: {
                    height: "144px",
                    alignItems: "flex-start",
                  },
                }}
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  borderRadius: "6px",
                  border: "1px solid #E1E1E6",
                  backgroundColor: "#F6F6F6",
                  color: "#9EA3AE",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          width="100%"
          sx={{ pl: { lg: "50px", md: "50px", sm: "0px", xs: "0px" }, pt: {lg: "0px", md: "0px", sm: "70px", xs: "70px"} }}
        >
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typo2>Status :</Typo2>
                <Typo1 width="100%" sx={{pr: {lg: "0px", md: "0px", sm: "100%", xs: "20px"}}}>
                  *If the plate is active it will be visible to the customer
                </Typo1>
              </Box>
              <Box>
                <SwitchButton />
              </Box>
            </Box>

            <Box pt="57px">
              <Box>
                <Box sx={{ pt: "9px", pb: "8px" }}>
                  <Typo2 display="inline">Ingridients </Typo2>
                  <Typo2 display="inline" color="#9EA3AE">
                    {" "}
                    ( Optional )
                  </Typo2>
                </Box>
                <Box
                  sx={
                    {
                      // '& .MuiTextField-root': {  height: '48px' },
                    }
                  }
                >
                  <TextField
                    fullWidth
                    id="filled-textarea"
                    placeholder="Select ingridients"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <img src="./images/arrow-right.svg" alt="" />
                        </InputAdornment>
                      ),
                      style: {
                        height: "48px",
                      },
                    }}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                      borderRadius: "6px",
                      border: "1px solid #E1E1E6",
                      backgroundColor: "#F6F6F6",
                      color: "#9EA3AE",
                      //   '& .MuiTextField-root': {  height: '48px' },
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Box sx={{ pt: "9px", pb: "8px" }}>
                  <Typo2 display="inline">Nutritional information </Typo2>
                  <Typo2 display="inline" color="#9EA3AE">
                    {" "}
                    ( Optional )
                  </Typo2>
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    id="filled-textarea"
                    placeholder="Select nutritional info"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <img src="./images/arrow-right.svg" alt="" />
                        </InputAdornment>
                      ),
                      style: {
                        height: "48px",
                      },
                    }}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                      borderRadius: "6px",
                      border: "1px solid #E1E1E6",
                      backgroundColor: "#F6F6F6",
                      color: "#9EA3AE",
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Box sx={{ pt: "9px", pb: "8px" }}>
                  <Typo2 display="inline">Scheduled dishes </Typo2>
                  <Typo2 display="inline" color="#9EA3AE">
                    {" "}
                    ( Optional )
                  </Typo2>
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    id="filled-textarea"
                    placeholder="Select scheduled dishes"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <img src="./images/arrow-right.svg" alt="" />
                        </InputAdornment>
                      ),
                      style: {
                        height: "48px",
                      },
                    }}
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                      borderRadius: "6px",
                      border: "1px solid #E1E1E6",
                      backgroundColor: "#F6F6F6",
                      color: "#9EA3AE",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </MainBox>
    </>
  );
}
