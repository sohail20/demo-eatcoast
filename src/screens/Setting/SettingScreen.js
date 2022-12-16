import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import SubscriptionChart from "./Components/SubscriptionChart/SubscriptionChart";
import ButtonsScreen from "./Components/ButtonsScreen/ButtonsScreen";
import "./style.css";
function SettingScreen({ handleChangeScreen }) {
  return (
    <>
      {/* <Box component='div' sx={{borderBottom:'1px solid #E1E1E6',height:'84px',width:'100%',}}></Box> */}

      <Container className="mainBox" maxWidth="xl">
        <Grid container>
          <Grid lg={6} md={6} sm={12} xs={12} item>
            <Box
              className="chartBox"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #E1E1E6",
                borderRadius: "4px",
                height: "35vh",
                flexDirection: "column",
                padding: "10px",
                margin: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#545359",
                  fontWeight: "600",
                }}
              >
                Total Subscription
              </Typography>

              <SubscriptionChart />
            </Box>
          </Grid>
          <Grid lg={6} md={6} sm={12} xs={12}>
            <Box
              className="chartBox"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #E1E1E6",
                borderRadius: "4px",
                height: "35vh",
                flexDirection: "column",
                padding: "15px",
                margin: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#545359",
                  fontWeight: "600",
                }}
              >
                Total Meals Prepared
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: "600",
                  marginTop: 3,
                }}
              >
                1352
              </Typography>
              <Typography
                sx={{
                  marginTop: 3,
                  color: "#9EA3AE",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Meals Plan
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <ButtonsScreen handleChangeScreen={(id) => handleChangeScreen(id)} />
    </>
  );
}

export default SettingScreen;
