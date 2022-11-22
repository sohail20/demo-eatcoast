import { Box, styled } from "@mui/material";

const CustomPaper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px 10px 15px 10px",
  width: "100%",
  height: "auto",
  background: " #FFFFFF",
  border: "1px solid #E1E1E6",
  borderRadius: "8px",
}));

const BorderContainer = ({ children, ...rest }) => {
  return <CustomPaper {...rest}>{children}</CustomPaper>;
};

export default BorderContainer;
