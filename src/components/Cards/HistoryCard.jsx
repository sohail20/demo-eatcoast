import { Box } from "@mui/material";
import { BorderContainer } from "../Containers";
import { H3Typo } from "../Typography";
import LightTitle from "../Typography/LightTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const HistoryCard = () => {
  return (
    <BorderContainer gap={2} style={{ width: "160px" }}>
      <BorderContainer
        style={{ background: "#E1E1E6", width: "32px", height: "32px" }}
      >
        <CheckCircleIcon style={{ color: "#42C677" }} />
      </BorderContainer>
      <Box>
        <LightTitle>#3211321321</LightTitle>
        <H3Typo>$ 1.200</H3Typo>
        <LightTitle>18 Aug 2021</LightTitle>
      </Box>
    </BorderContainer>
  );
};

export default HistoryCard;
