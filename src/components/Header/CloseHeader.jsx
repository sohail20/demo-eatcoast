import { Box } from "@mui/material";
import CustomIconButton from "../Button/CustomIconButton";
import { H1Typo } from "../Typography";
import ClearIcon from "@mui/icons-material/Clear";

const CloseHeader = ({ handleClose, title }) => {
  return (
    <Box display={"flex"} alignItems="center" style={{ marginBottom: "20px" }}>
      <CustomIconButton
        icon={<ClearIcon style={{ color: "#E75C62" }} />}
        onClick={handleClose}
      />
      {title && (
        <Box style={{ width: "100%", textAlign: "center" }}>
          <H1Typo>{title}</H1Typo>
        </Box>
      )}
    </Box>
  );
};

export default CloseHeader;
