import { Box, Grid } from "@mui/material";
import CustomIconButton from "components/Button/CustomIconButton";
import {
  BorderContainer,
  CenteredBoxContainer,
  FlexBoxContainer,
} from "components/Containers";
import { H3Typo, LightTitle } from "components/Typography";

const DeliveryCard = ({
  status = "delivered",
  hasSeeAllButton = false,
  handleSeeAllOrder,
  handleSeeList,
}) => {
  return (
    <BorderContainer>
      <Box width="100%">
        <CenteredBoxContainer>
          <img src={require("Assets/Svg/onDelivery.png")} />
        </CenteredBoxContainer>

        <CenteredBoxContainer>
          {status === "waiting" ? (
            <LightTitle style={{ textAlign: "center" }}>
              Waiting for driver
            </LightTitle>
          ) : status === "progress" ? (
            <Box display="inline-flex">
              <BorderContainer>
                <Box textAlign="center">
                  <LightTitle>Estimated arrival in </LightTitle>
                  <H3Typo>23 Min</H3Typo>
                </Box>
              </BorderContainer>
            </Box>
          ) : status === "delivered" ? (
            <>
              <Box textAlign="center">
                <LightTitle>All orders have been delivered</LightTitle>
                <CustomIconButton label="Done" variant="outlined" />
              </Box>
            </>
          ) : status === "completed" ? (
            <>
              <Box textAlign="center">
                <LightTitle>All orders have been delivered</LightTitle>
              </Box>
            </>
          ) : null}
        </CenteredBoxContainer>

        <FlexBoxContainer
          style={{ justifyContent: "space-evenly", marginTop: "10px" }}
        >
          {status !== "delivered" && (
            <>
              <Box
                style={{
                  border: "1px solid #B2BEE6",
                  borderRadius: "32px",
                  padding: "19px 22px 19px 22px",
                  cursor: "pointer",
                }}
                onClick={() => handleSeeList("in-queue")}
              >
                <img src={require("Assets/Svg/timer.png")} />
              </Box>

              <Box
                style={{
                  border: "1px solid #FCD29C",
                  borderRadius: "32px",
                  padding: "19px 22px 19px 22px",
                  cursor: "pointer",
                }}
                onClick={() => handleSeeList("being-delivered")}
              >
                <img src={require("Assets/Svg/truck-fast.png")} />
              </Box>
            </>
          )}

          <Box
            style={{
              border: "1px solid #A0E4B8",
              borderRadius: "32px",
              padding: "19px 22px 19px 22px",
              cursor: "pointer",
            }}
            onClick={() => handleSeeList("completed")}
          >
            <img src={require("Assets/Svg/tick-circle.png")} />
          </Box>
        </FlexBoxContainer>
        <FlexBoxContainer style={{ justifyContent: "space-evenly" }}>
          {status !== "delivered" && (
            <>
              <LightTitle>In Queue</LightTitle>
              <LightTitle>Being Delivered</LightTitle>
            </>
          )}
          <LightTitle>Complete</LightTitle>
        </FlexBoxContainer>
        {hasSeeAllButton && (
          <CenteredBoxContainer>
            <CustomIconButton
              label="See all order"
              variant="outlined"
              onClick={handleSeeAllOrder}
            />
          </CenteredBoxContainer>
        )}
      </Box>
    </BorderContainer>
  );
};

export default DeliveryCard;
