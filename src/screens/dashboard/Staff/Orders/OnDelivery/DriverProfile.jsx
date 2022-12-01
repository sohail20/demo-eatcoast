import { useState } from "react";
import { Grid, Box, Avatar, Stack } from "@mui/material";
import {
  BorderContainer,
  FlexBoxContainer,
  CenteredBoxContainer,
} from "components/Containers";
import { H1Typo, LightTitle, H3Typo } from "components/Typography";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CustomIconButton from "components/Button/CustomIconButton";
import CallIcon from "@mui/icons-material/Call";
import ChatIcon from "@mui/icons-material/Chat";
import DeliveryCard from "components/Cards/DeliveryCard";
import CloseHeader from "components/Header/CloseHeader";
import SimpleChips from "components/Chips/SimpleChips";
import UnderlineButton from "components/Button/UnderlineButton";

const DriverProfile = () => {
  const [showDeliveryList, setShowDeliveryList] = useState(null);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={showDeliveryList ? 4 : 6}>
          <Stack spacing={2}>
            <Box display="flex" gap={2}>
              <Avatar
                alt="Remy Sharp"
                src="https://www.w3schools.com/howto/img_avatar.png"
                sx={{ width: 56, height: 56 }}
              />
              <Box display="flex" alignItems="center" justifyContent="center">
                <Box>
                  <LightTitle>DEC - 12345</LightTitle>
                  <H3Typo>Philip Bodogeza</H3Typo>
                </Box>
              </Box>
            </Box>
            <BorderContainer>
              <Box display="flex" width="100%" gap={2}>
                <CustomIconButton
                  width={"100%"}
                  icon={<CallIcon />}
                  label="Call"
                  variant={"contained"}
                />
                <CustomIconButton
                  width={"100%"}
                  icon={<ChatIcon />}
                  label="Chat"
                  variant={"contained"}
                />
              </Box>
            </BorderContainer>
            <FlexBoxContainer>
              <Box>
                <LightTitle>Verification code :</LightTitle>
                <H1Typo>D - 267045</H1Typo>
              </Box>
              <Box>
                <LightTitle>Total order :</LightTitle>
                <H1Typo>30 Order</H1Typo>
              </Box>
            </FlexBoxContainer>
            <LightTitle>
              *Provide the verification code to the courier
            </LightTitle>
            <FlexBoxContainer>
              <LightTitle style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <CalendarMonthOutlinedIcon
                  style={{ fontSize: "15px", marginRight: "10px" }}
                />
                Date
              </LightTitle>
              <Box>
                <BorderContainer style={{ height: "32px" }}>
                  <LightTitle>Thursday, 9 Dec, 2021</LightTitle>
                </BorderContainer>
              </Box>
            </FlexBoxContainer>

            <FlexBoxContainer>
              <LightTitle style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <TimerOutlinedIcon
                  style={{ fontSize: "15px", marginRight: "10px" }}
                />
                Time
              </LightTitle>
              <Box>
                <BorderContainer style={{ height: "32px" }}>
                  <LightTitle>03.00 Pm - 07.00 Pm</LightTitle>
                </BorderContainer>
              </Box>
            </FlexBoxContainer>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={showDeliveryList ? 4 : 6}>
          <DeliveryCard
            status="waiting"
            handleSeeList={(e) => setShowDeliveryList(e)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          style={{ display: showDeliveryList ? "block" : "none" }}
        >
          <DeliveryListCard
            type={showDeliveryList}
            handleClose={() => setShowDeliveryList(null)}
          />
        </Grid>
      </Grid>
    </>
  );
};

const DeliveryListCard = ({ handleClose, type }) => {
  return (
    <>
      <CloseHeader title="In Queue" handleClose={handleClose} />

      <BorderContainer>
        <Stack spacing={2} width={"100%"}>
          <FlexBoxContainer>
            <Box
              style={{
                border: `1px solid ${
                  type === "in-queue"
                    ? "#B2BEE6"
                    : type === "being-delivered"
                    ? "#FCD29C"
                    : "#A0E4B8"
                }`,
                borderRadius: "32px",
                padding: "6px 6px ",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={require(`Assets/Svg/${
                  type === "in-queue"
                    ? "timer"
                    : type === "being-delivered"
                    ? "truck-fast"
                    : "tick-circle"
                }.png`)}
                width={"14px"}
              />
            </Box>
            <SimpleChips label="Single order" />
          </FlexBoxContainer>

          <Box>
            <H1Typo>ECS - 12345</H1Typo>
            <LightTitle>Salmon with sweet chili</LightTitle>
          </Box>

          <CenteredBoxContainer>
            <UnderlineButton onClick={() => {}}>Detail</UnderlineButton>
          </CenteredBoxContainer>
        </Stack>
      </BorderContainer>
    </>
  );
};

export default DriverProfile;
