import { Box, styled } from "@mui/material";

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const FlexBoxContainer = ({ children }) => {
  return <FlexBox>{children}</FlexBox>;
};

export default FlexBoxContainer;
