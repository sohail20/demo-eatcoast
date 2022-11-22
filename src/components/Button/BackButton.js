import { Button, Typography, styled } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Typo = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "24px",
  display: "flex",
  textTransform: "none",
  alignItems: "center",
  color: "#2B817B",
}));

const BackButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      startIcon={<ArrowBackIosIcon style={{ color: "#9EA3AE" }} />}
    >
      <Typo>Back</Typo>
    </Button>
  );
};

export default BackButton;
