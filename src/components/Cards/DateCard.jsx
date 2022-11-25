import { Box } from "@mui/material";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { BorderContainer, FlexBoxContainer } from "../Containers";
import { H1Typo, LightTitle } from "../Typography";

const DateCard = ({ data }) => {
  const { status, date, month, dataId, value } = data;
  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center">
      <BorderContainer style={{ width: "67px",padding: "3px 24px" }}>
        <Box>
          <H1Typo>{date}</H1Typo>
          <LightTitle>{month}</LightTitle>
        </Box>
      </BorderContainer>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        ml={2}
      >
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
            <LightTitle>{dataId}</LightTitle>
            <Box display="flex" gap={2}>
              <LightTitle color={status === "waiting" ? "#FAA641" : "#42C677"}>
                {status}{" "}
              </LightTitle>
              {status === "waiting" ? (
                <WatchLaterRoundedIcon style={{ color: "#FAA641" }} />
              ) : (
                <CheckCircleRoundedIcon style={{ color: "#42C677" }} />
              )}
            </Box>
          </FlexBoxContainer>
          <H1Typo>{value}</H1Typo>
        </Box>
      </Box>
    </Box>
  );
};

export default DateCard;
