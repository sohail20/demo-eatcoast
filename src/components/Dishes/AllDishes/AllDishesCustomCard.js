import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { CustomChip } from "./CustomChip";

export const AllDishesCustomCard = ({ chip, data, onHandleClick, handleEditDish }) => {
  const MainBox = styled("div")(({ theme }) => ({
    marginBottom: "24px",
    // width: "476px",
    width: "100%",
    height: "90px",
    border: "1px solid #E1E1E6",
    borderRadius: "6px",
    padding: "12px",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      height: "auto",
    },
    [theme.breakpoints.up('xl')]: {
      width: "100%",
      height: "auto"
    }
  }));

  const Typo1 = styled(Typography)(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
    textTransform: "capitalize",
    [theme.breakpoints.up('xl')]: {
      paddingBottom: "15px",
      fontSize: "18px",
    }
  }));

  const Typo2 = styled(Typography)(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
    color: "#545359",
    width: "277px",

    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "14px",
      width: "100%",
      lineHeight: "24px"
    }
  }));

  const Button1 = styled(Button)(({ theme }) => ({
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
    padding: "0px",
    minHeight: "0px",
    minWidth: "0px",
    paddingTop: "10px",
    paddingRight: "5px",
  }));

  return (
    <>
      <MainBox>
        <Box sx={{ display: "flex", flexDirection: { xl: "row", lg: "row", md: "row", sm: "row", xs: "column" } }}>
          <Box >
            <Box
              sx={{
                width: {
                  xl: "200px",
                  lg: "92px",
                  md: "92px",
                  sm: "70px",
                  xs: "100%",
                },
                height: {
                  xl: "auto",
                  lg: "64px",
                  md: "64px",
                  sm: "64px",
                  xs: "auto",
                },

              }}
            >
              <img src={data.image} alt="" width="100%" height="auto" />
            </Box>
          </Box>

          <Box sx={{ paddingLeft: { xl: "16px", lg: "16px", md: "16px", sm: "16px", xs: "0px" }, width: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typo1>{data.title}</Typo1>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {data.status && (
                  <CustomChip
                    label={data.status}
                    color={
                      data.status === "Rejected"
                        ? "#E75C62"
                        : data.status === "Need to Submit"
                          ? "#42C677"
                          : "#FAA641"
                    }
                  />
                )}
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typo2>{data.subTitle}</Typo2>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button1 variant="text" onClick={() => handleEditDish(data.id)}>Edit</Button1>
              </Box>
            </Box>
          </Box>
        </Box>
      </MainBox>
    </>
  );
};
