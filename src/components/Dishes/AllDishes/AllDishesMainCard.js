import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";

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
  display: "flex",
  alignItems: "center",
}));

const Typo2 = styled("div")(({ theme }) => ({
  fontFamily: "outfit",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  color: "#9EA3AE",
  // display: "flex",
  // alignItems: "center",
}));

const SubBox = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 2),

  marginBottom: "24px",
}));

const Typo3 = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  fontFamily: "outfit",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  color: "#2B817B",
  textDecoration: "underline",
  textTransform: "capitalize",
}));

const Button1 = styled(Button)(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  fontFamily: "outfit",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "24px",
  backgroundColor: "#2B817B",
  display: "flex",
  alignItems: "center",
  textTransform: "capitalize",
  [theme.breakpoints.down("lg")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
    lineHeight: "10px",
  },
}));

const Button2 = styled(Button)(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  fontFamily: "outfit",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  color: "#2B817B",
  display: "flex",
  alignItems: "center",
  textTransform: "capitalize",
  textDecoration: "underline",
}));

export default function AllDishesMainCard({
  title,
  image,
  BtnName,
  icon,
  hasToInput,
  onHandleClick,
  setOpenEditDish,
  openEditDishscreen
}) {
  
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <SubBox>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box sx={{ width: "56px", height: "56px" }}>
                    <img src={image} alt="" width="100%" height="auto" />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      // textAlign: "center"
                    }}
                  >
                    <Typo1
                      sx={{
                        display: "flex",
                        pl: "16px",
                        // alignItems: "center"
                      }}
                    >
                      {title}
                    </Typo1>
                  </Box>
                </Box>

                <Box sx={{ display: "flex" }}>
                  {hasToInput && (
                    <Box>
                      <Button2 variant="text" onClick={onHandleClick}>Edit</Button2>
                    </Box>
                  )}

                  <Box
                    sx={{
                      pl: {
                        xl: "28px",
                        lg: "28px",
                        md: "28px",
                        sm: "28px",
                        xs: "0px",
                      },
                    }}
                  >
                    <Button1 variant="contained" startIcon={icon}
                    onClick={()=>setOpenEditDish(true)}
                    // onClick={() => {
                    //   setOpenEditDish(true)
                    // }}
                    >
                      {BtnName}
                    </Button1>
                  </Box>
                </Box>
              </Box>
            </SubBox>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
