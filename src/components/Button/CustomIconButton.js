import { Button, Typography, styled } from "@mui/material";

const Typo = styled(Typography)(({ theme, variant, color }) => ({
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "24px",
  display: "flex",
  textTransform: "none",
  alignItems: "center",
  color: variant === "contained" ? "#fff" : color ? color : "#2B817B",
}));

const CustomIconButton = ({
  label,
  color,
  variant,
  icon,
  onClick,
  width
}) => {
  return (
    <Button
      onClick={onClick}
      startIcon={icon ? icon : undefined}
      variant={variant}
      style={{
        borderColor:
          variant === "outlined" ? (color ? color : "#2B817B") : undefined,
        backgroundColor: variant === "contained" ? "#2B817B" : undefined,
        width:width?width:undefined
      }}
    >
      <Typo variant={variant} color={color}>
        {label}
      </Typo>
    </Button>
  );
};

export default CustomIconButton;
