import { Box, styled } from "@mui/material";
import { FlexBoxContainer } from "../Containers";
import LightTitle from "../Typography/LightTitle";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { H1Typo } from "../Typography";

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

const CashCard = ({ price="12.000", label="Last update : 24 august 2021" }) => {
  return (
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
            <LightTitle color="#E1E1E6">{label}</LightTitle>
          </FlexBoxContainer>
          <Box display={"flex"} alignItems="center" justifyContent={"start"}>
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
              <NorthEastIcon style={{ fontSize: "19px", color: "#2B817B" }} />
            </Box>
            <H1Typo color="#FFFFFF">
              {price}
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
  );
};

export default CashCard;
