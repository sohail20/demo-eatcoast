import { Button, Typography, styled } from "@mui/material";

const Typo = styled(Typography)(({ theme, variant }) => ({
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "24px",
  display: "flex",
  textTransform: "none",
  alignItems: "center",
  color: variant === "contained" ? "#fff" : "#2B817B",
}));

const CustomIconButton = ({ label = "Back", variant, icon, onClick }) => {
  return (
    <Button
      onClick={onClick}
      startIcon={icon ? icon : undefined}
      variant={variant}
      style={{
        borderColor: "#2B817B",
        backgroundColor: "#2B817B",
      }}
    >
      <Typo variant={variant}>{label}</Typo>
    </Button>
  );
};

export default CustomIconButton;
