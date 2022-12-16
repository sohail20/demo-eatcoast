import { Button, Typography, styled } from "@mui/material";
import CircleLoader from "components/Loader/CircleLoader";

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
  disabled,
  isLoading,
  icon,
  onClick,
  width,
  type
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      startIcon={icon ? icon : undefined}
      variant={variant}
      style={{
        opacity: disabled ? "0.5" : undefined,
        borderColor:
          variant === "outlined" ? (color ? color : "#2B817B") : undefined,
        backgroundColor: variant === "contained" ? "#2B817B" : undefined,
        width: width ? width : undefined,
      }}
      type={type}
    >
      {isLoading ? (
        <CircleLoader />
      ) : (
        label && (
          <Typo variant={variant} color={color}>
            {label}
          </Typo>
        )
      )}
    </Button>
  );
};

export default CustomIconButton;
