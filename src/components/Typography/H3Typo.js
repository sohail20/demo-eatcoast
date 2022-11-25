import { styled, Typography } from "@mui/material";

const Title = styled(Typography)(({ theme, color = "#1A1824" }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  letterSpacing: "0.015em",
  color:color,
}));

const H3Typo = ({ color, children }) => {
  return <Title color={color}>{children}</Title>;
};

export default H3Typo;
