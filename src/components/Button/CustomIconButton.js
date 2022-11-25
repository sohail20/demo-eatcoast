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

const CustomIconButton = ({ label, variant, icon, onClick }) => {
  return (
    <Button
      onClick={onClick}
      startIcon={icon ? icon : undefined}
      variant={variant}
      style={{
        borderColor: variant === "outlined" ? "#2B817B" : undefined,
        backgroundColor: variant === "contained" ? "#2B817B" : undefined,
      }}
    >
      <Typo variant={variant}>{label}</Typo>
    </Button>
  );
};

export default CustomIconButton;
