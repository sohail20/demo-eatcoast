import { Box, styled } from "@mui/material";

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const FlexBoxContainer = ({ children, ...rest }) => {
  return <FlexBox {...rest}>{children}</FlexBox>;
};

export default FlexBoxContainer;
