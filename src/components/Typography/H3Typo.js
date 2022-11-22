import { styled, Typography } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  letterSpacing: "0.015em",
  color: "#1A1824",
}));

const H3Typo = ({ children }) => {
  return <Title>{children}</Title>;
};

export default H3Typo;
