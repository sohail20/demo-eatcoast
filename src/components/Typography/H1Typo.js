import { styled, Typography } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "20px",
  letterSpacing: "0.015em",
  color: "#1A1824",
}));

const H1Typo = ({ children }) => {
  return <Title>{children}</Title>;
};

export default H1Typo;
