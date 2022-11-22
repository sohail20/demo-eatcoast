import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

export default function AllDishesCard() {
  const Data = [
    {
      title: "Main Course",
      subTitle: "No dishes added",
      image: "./images/MainCourse.svg",
    },
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
    display: "flex",
    alignItems: "center"
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
  }));


  return (
    <>
      <Box sx={{}}>
        <Grid container>
          {Data.map((v, i) => {
            return (
              <>
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
                          <img
                            src={v.image}
                            alt=""
                            width="100%"
                            height="auto"
                          />
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
                            {v.title}
                          </Typo1>
                        </Box>
                      </Box>

                      <Box>
                        <Button1 variant="contained" startIcon={<AddIcon />}>
                        Add Dishes
                        </Button1>
                      </Box>
                    </Box>
                  </SubBox>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
