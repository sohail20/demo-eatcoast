import { styled, Typography } from "@mui/material";
const LightTitleTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  maxWidth: "569px",
  letterSpacing: "0.015em",
  color: "#9EA3AE",
}));

const LightTitle = ({ children }) => {
  return <LightTitleTypo>{children}</LightTitleTypo>;
};
export default LightTitle;
