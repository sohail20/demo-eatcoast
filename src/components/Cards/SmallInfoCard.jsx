import { Box, styled, Typography, Button } from "@mui/material";
import UnderlineButton from "../Button/UnderlineButton";
import AddIcon from "@mui/icons-material/Add";
import FlexBoxContainer from "../Containers/FlexBoxContainer";
import SimpleChips from "../Chips/SimpleChips";
import { BorderContainer, CenteredBoxContainer } from "../Containers";
import { H3Typo } from "../Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const BoxContainer = styled(Box)(({ theme, borderLess }) => ({
  display: "block",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "12px",
  gap: "16px",
  width: "100%",
  height: "auto",
  border: !borderLess ? "1px solid #E1E1E6" : undefined,
  borderRadius: "8px",
}));

const HeadingTypo = styled(Typography)({
  textAlign: "start",
  height: "36px",
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "150%",
  letterSpacing: " 0.01em",
  color: "#000000",
});

const LightTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  maxWidth: "569px",
  letterSpacing: "0.015em",
  color: "#9EA3AE",
}));

const SmallInfoCard = ({
  data,
  borderLess = false,
  status,
  statusColor,
  hasEditButton = false,
  rightSideTitle,
  hasPoints,
  hasAddButton,
  ...rest
}) => {
  return (
    <>
      <BoxContainer borderLess={borderLess} {...rest} mt={2} hasEditButton={hasEditButton}>
        <CenteredBoxContainer style={{ width: "100%" }}>
          <Box style={{ display: "flex" }}>
            <Box>
              <img
                src={data.img}
                alt={"some title"}
                loading="lazy"
                height="100%"
                style={{
                  height: borderLess ? "88px" : "72px",
                  borderRadius: "4px",
                }}
              />
            </Box>
          </Box>
          <Box style={{ width: "100%" }} ml={2}>
            <FlexBoxContainer>
              <HeadingTypo>{data.heading}</HeadingTypo>
              {hasAddButton && (
                <Button
                  variant="contained"
                  style={{ background: "#2B817B" }}
                  startIcon={<AddIcon />}
                >
                  Add Menu
                </Button>
              )}
              {data.status && (
                <SimpleChips
                  label={data.status}
                  chipColor={
                    data.status === "Rejected"
                      ? "#E75C62"
                      : data.status === "Need to Submit"
                      ? "#42C677"
                      : "#FAA641"
                  }
                />
              )}
              {rightSideTitle && (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <LightTitle>{rightSideTitle}</LightTitle>
                  <ArrowForwardIosIcon style={{ color: " #9EA3AE" }} />
                </Box>
              )}
            </FlexBoxContainer>
            <Box
              display="flex"
              justifyContent={"space-between"}
              alignItems="center"
            >
              {data.address && <LightTitle>{data.address}</LightTitle>}
              {hasEditButton && <UnderlineButton>Edit</UnderlineButton>}
            </Box>
          </Box>
        </CenteredBoxContainer>
        {hasPoints && (
          <BorderContainer
            style={{
              borderRadius: "4px",
              background: "#F6F6F6",
              display: "block",
              border: "none",
            }}
            mt={2}
          >
            {hasPoints.map((item) => (
              <>
                <H3Typo>
                  <FiberManualRecordIcon
                    style={{ fontSize: "8px", marginRight: "5px" }}
                  />
                  {item}
                </H3Typo>
                <br />
              </>
            ))}
          </BorderContainer>
        )}
      </BoxContainer>
    </>
  );
};

export default SmallInfoCard;
