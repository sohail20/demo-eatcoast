import { Box, styled } from "@mui/material";
const CenteredBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const CenteredBoxContainer = ({ children, ...rest }) => {
  return <CenteredBox {...rest}>{children}</CenteredBox>;
};

export default CenteredBoxContainer;
