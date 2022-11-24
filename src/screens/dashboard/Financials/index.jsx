import { Grid, Box, styled, Stack } from "@mui/material";
import React from "react";
import UnderlineButton from "../../../components/Button/UnderlineButton";
import HistoryCard from "../../../components/Cards/HistoryCard";
import {
  BorderContainer,
  FlexBoxContainer,
} from "../../../components/Containers";
import { H1Typo, H3Typo } from "../../../components/Typography";
import LightTitle from "../../../components/Typography/LightTitle";
import DashboardLayout from "../../DashboardLayout/DashboardLayout";
import EastIcon from "@mui/icons-material/East";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import CustomizedDrop from "../../../components/Inputs/DropDown";
import CustomBarChart from "../../../components/Charts/CustomBarChart";
const ColoredBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "baseline",
  padding: "12px 24px",
  gap: "10px",
  width: "100%",
  height: "48px",
  background: "#2B817B",
  borderRadius: "8px",
}));
const Financials = () => {
  return (
    <>
      <DashboardLayout>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={3}>
            <Stack spacing={2}>
              <ColoredBox style={{ height: "131px" }}>
                <Box style={{ height: "100%" }}>
                  <Box
                    style={{
                      height: "100%",
                      flexDirection: "column",
                      width: "100%",
                      display: "flex",
                      justifyContent: " space-between",
                    }}
                  >
                    <FlexBoxContainer width="100%">
                      <LightTitle color="#E1E1E6">
                        Last update : 24 august 2021
                      </LightTitle>
                    </FlexBoxContainer>
                    <Box
                      display={"flex"}
                      alignItems="center"
                      justifyContent={"start"}
                    >
                      <Box
                        padding={1}
                        style={{
                          height: "16px",
                          width: "16px",
                          background: "#fff",
                          borderRadius: "5px",
                          marginRight: "10px",
                        }}
                      >
                        <NorthEastIcon
                          style={{ fontSize: "19px", color: "#2B817B" }}
                        />
                      </Box>
                      <H1Typo color="#FFFFFF" style={{ display: "flex" }}>
                        12.000
                      </H1Typo>
                    </Box>
                  </Box>
                </Box>
                {/* <img
                  style={{
                    position: "absolute",
                    width: "197.96px",
                    height: " 135.45px",
                    right: "50px",
                    top: "71px",
                    transform: "rotate(4deg)",
                  }}
                  src={require("../../../Assets/Svg/sprinkel.png")}
                /> */}
              </ColoredBox>
              <ColoredBox style={{}}>
                <FlexBoxContainer width="100%">
                  <H3Typo color="#fff">Withdraw</H3Typo>
                  <EastIcon style={{ color: "#80B3B0" }} />
                </FlexBoxContainer>
              </ColoredBox>
              <H1Typo>Your Card</H1Typo>
              <BorderContainer style={{ justifyContent: "flex-start" }}>
                <Box>
                  <FlexBoxContainer>
                    <img
                      src={"https://picsum.photos/200"}
                      alt={"some title"}
                      style={{
                        width: "53px",
                        height: "24px",
                        borderRadius: "2px",
                        marginRight: "10px",
                      }}
                    />
                    <H3Typo>1234 - 1234 - 1234</H3Typo>
                  </FlexBoxContainer>
                  <LightTitle>Muhammad ali wibawa</LightTitle>
                </Box>
              </BorderContainer>
              <BorderContainer>
                <H3Typo>Change Card</H3Typo>
              </BorderContainer>
            </Stack>
          </Grid>

          <Grid item xs={12} md={9} lg={9}>
            <BorderContainer>
              <Box style={{ width: "100%" }}>
                <FlexBoxContainer>
                  <Box>
                    <H1Typo>Revenue</H1Typo>
                    <LightTitle>From 1 - 30 August 2022</LightTitle>
                  </Box>
                  <UnderlineButton>Transaction details</UnderlineButton>
                </FlexBoxContainer>
                <CustomizedDrop
                  items={[
                    {
                      label: "View Details",
                      icon: "fa fa-eye",
                      id: "view-details",
                    },
                    {
                      label: "Pause Subscription",
                      icon: "fa fa-eye",
                      color: "#6A82CF",
                      id: "pause-subscription",
                    },
                    {
                      label: "Change Address",
                      icon: "fa fa-eye",
                      id: "change-address",
                    },
                    {
                      label: "View Receipt",
                      icon: "fa fa-eye",
                      id: "view-receipt",
                    },
                    {
                      label: "Cancel Subscription",
                      icon: "fa fa-eye",
                      color: "#E75C62",
                      id: "cancel-subscription",
                    },
                    { label: "Help", icon: "fa fa-eye", id: "help" },
                  ]}
                  label="Day"
                  title="Sort by"
                  onClick={(e) => {
                    console.log(e);
                  }}
                />
              <CustomBarChart/>
              </Box>

            </BorderContainer>
          </Grid>
        </Grid>

        <FlexBoxContainer>
          <H1Typo>Withdraw History</H1Typo>
          <UnderlineButton>See More</UnderlineButton>
        </FlexBoxContainer>
        <Grid container spacing={2} style={{ marginTop: 2 }}>
          {[...Array(6)].map(() => (
            <Grid item xs={2} md={2} lg={2}>
              <Box>
                <HistoryCard />
              </Box>
            </Grid>
          ))}
        </Grid>
      </DashboardLayout>
    </>
  );
};

export default Financials;
