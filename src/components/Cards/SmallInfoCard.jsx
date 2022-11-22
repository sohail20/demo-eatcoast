import { Box, styled, Typography, Button } from "@mui/material";
import UnderlineButton from "../Button/UnderlineButton";
import AddIcon from "@mui/icons-material/Add";
import FlexBoxContainer from "../Containers/FlexBoxContainer";
const BoxContainer = styled(Box)(({ theme, borderLess }) => ({
  display: "flex",
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
  hasEditButton,
  hasAddButton,
}) => {
  return (
    <>
      <BoxContainer borderLess={borderLess}>
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
        <Box style={{ width: "100%" }}>
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
          </FlexBoxContainer>
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <LightTitle>{data.address}</LightTitle>
            {hasEditButton && <UnderlineButton>Edit</UnderlineButton>}
          </Box>
        </Box>
      </BoxContainer>
    </>
  );
};

export default SmallInfoCard;
