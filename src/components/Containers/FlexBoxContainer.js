import { Box, styled } from "@mui/material";

const FlexBox = styled(Box)(({ width }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width:width
}));

const FlexBoxContainer = ({width = "100%", children, ...rest }) => {
  return <FlexBox width {...rest}>{children}</FlexBox>;
};

export default FlexBoxContainer;
