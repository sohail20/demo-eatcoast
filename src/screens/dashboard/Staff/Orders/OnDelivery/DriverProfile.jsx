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
import RequestCard from "components/Cards/RequestCard";

const DriverProfile = ({handleClickChat}) => {
  const [showDeliveryList, setShowDeliveryList] = useState(null);
  const [deliveryToShowDetail, setDeliveryToShowDetail] = useState(null);
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
                  onClick={handleClickChat}
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
          {deliveryToShowDetail === null ? (
            <DeliveryListCard
              type={showDeliveryList}
              handleClose={() => setShowDeliveryList(null)}
              handleSeeDetails={(e) => {
                setDeliveryToShowDetail(e);
              }}
            />
          ) : (
            <DetailOrder
              data={{ id: deliveryToShowDetail }}
              handleClose={() => setDeliveryToShowDetail(null)}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

const DetailOrder = ({ data, handleClose }) => {
  const { id } = data;
  return (
    <>
      <CloseHeader title="Detail Order" variant="back" handleClose={handleClose} />
      <Stack spacing={2}>
        <FlexBoxContainer>
          <LightTitle>{id}</LightTitle>
          <SimpleChips label="Single order" />
        </FlexBoxContainer>
        <FlexBoxContainer>
          <H3Typo>Salmon with chili sauce</H3Typo>
          <Box textAlign={"center"}>
            <H3Typo>1</H3Typo>
            <LightTitle>Order</LightTitle>
          </Box>
        </FlexBoxContainer>
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

        <BorderContainer>
          <FlexBoxContainer>
            <Box>
              <LightTitle>Main course</LightTitle>
              <H3Typo>Kabasa</H3Typo>
            </Box>

            <Box display="flex" gap={5}>
              <H3Typo>1</H3Typo>
              <H3Typo>$222</H3Typo>
            </Box>
          </FlexBoxContainer>
        </BorderContainer>

        <Box>
          <LightTitle></LightTitle>
          <FlexBoxContainer style={{ justifyContent: "end" }}>
            <Box display="flex">
              <LightTitle>Subtotal:</LightTitle>
              <LightTitle style={{ width: "85px", textAlign: "end" }}>
                $170.00
              </LightTitle>
            </Box>
          </FlexBoxContainer>

          <FlexBoxContainer style={{ justifyContent: "end" }}>
            <Box display="flex">
              <LightTitle>Tax:</LightTitle>
              <LightTitle style={{ width: "85px", textAlign: "end" }}>
                $10.00
              </LightTitle>
            </Box>
          </FlexBoxContainer>

          <FlexBoxContainer style={{ justifyContent: "end" }}>
            <Box display="flex">
              <LightTitle>Total:</LightTitle>
              <LightTitle style={{ width: "85px", textAlign: "end" }}>
                $180.00
              </LightTitle>
            </Box>
          </FlexBoxContainer>
        </Box>
      </Stack>
    </>
  );
};

const DeliveryListCard = ({ data, handleClose, handleSeeDetails, type }) => {
  return (
    <>
      <CloseHeader
        title="In Queue"
        handleClose={handleClose}
        variant={"back"}
      />

      <BorderContainer
        style={{ cursor: "pointer" }}
        onClick={() => handleSeeDetails("#ECS - 12345")}
      >
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
