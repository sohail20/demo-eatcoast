import React, { useState, useEffect } from "react";
import { Grid, Box, styled, Stack } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

import UnderlineButton from "../../../components/Button/UnderlineButton";
import HistoryCard from "../../../components/Cards/HistoryCard";
import {
  BorderContainer,
  FlexBoxContainer,
} from "../../../components/Containers";
import { H1Typo, H3Typo } from "../../../components/Typography";
import LightTitle from "../../../components/Typography/LightTitle";

import NorthEastIcon from "@mui/icons-material/NorthEast";
import CustomizedDrop from "../../../components/Inputs/DropDown";
import CustomBarChart from "../../../components/Charts/CustomBarChart";
import AddBankAccount from "./Modals/AddBankAccount";
import CashCard from "../../../components/Cards/CashCard";
import { useGetActiveBankQuery } from "api/bank";
import FullPageLoader from "components/Loader/FullPageLoader";

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

const FinancialDashBoard = () => {
  const { data: activeCard, isLoading } = useGetActiveBankQuery("active");
  const [activeCardDetail, setActiveCardDetail] = useState({
    accountNumber: "",
    accountHolder: "",
  });
  const [addBankAccountModal, setAddBankAccountModal] = useState(false);

  useEffect(() => {
    if (activeCard && activeCard.data) {
      setActiveCardDetail(activeCard.data);
    }
  }, [activeCard]);

  return isLoading ? (
    <FullPageLoader />
  ) : (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} lg={3}>
          <Stack spacing={2}>
            <CashCard label="Last update : 24 august 2021" price="12.000" />
            <ColoredBox>
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
                  <H3Typo>{activeCardDetail.accountNumber}</H3Typo>
                </FlexBoxContainer>
                <LightTitle>{activeCardDetail.accountHolder}</LightTitle>
              </Box>
            </BorderContainer>
            <BorderContainer
              style={{ cursor: "pointer" }}
              onClick={() => setAddBankAccountModal(true)}
            >
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
              <CustomBarChart />
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
          <Grid item xs={12} md={3} lg={2}>
            <Box>
              <HistoryCard />
            </Box>
          </Grid>
        ))}
      </Grid>

      {addBankAccountModal && (
        <AddBankAccount
          handleOnClose={() => setAddBankAccountModal(false)}
          isOpened={true}
        />
      )}
    </>
  );
};

export default FinancialDashBoard;
