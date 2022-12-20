import { Box } from "@mui/material";
import CustomIconButton from "../Button/CustomIconButton";
import { H1Typo } from "../Typography";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { FlexBoxContainer } from "components/Containers";
const CloseHeader = ({
  handleClose,
  label,
  variant = "close",
  title,
  rightButton,
}) => {
  return (
    <Box display={"flex"} alignItems="center" style={{ marginBottom: "20px" }}>
      <CustomIconButton
        icon={
          variant === "close" ? (
            <ClearIcon style={{ color: "#E75C62" }} />
          ) : (
            <ArrowBackIosIcon style={{ color: "#2B817B" }} />
          )
        }
        label={label}
        onClick={handleClose}
      />
      <FlexBoxContainer>
        {title && (
          <Box style={{ width: "100%", textAlign: "center" }}>
            <H1Typo>{title}</H1Typo>
          </Box>
        )}
        {rightButton && (
          <CustomIconButton
            label="Submit"
            variant={"contained"}
            type="submit"
          />
        )}
      </FlexBoxContainer>
    </Box>
  );
};

export default CloseHeader;
