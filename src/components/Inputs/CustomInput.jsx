import { TextField, Box } from "@mui/material";
import { H3Typo } from "../Typography";
const CustomInput = ({ label, width, ...rest }) => {
  return (
    <Box width={width}>
      <H3Typo>{label}</H3Typo>
      <TextField
        {...rest}
        sx={{
          ".MuiInputBase-root": {
            height: "36px",
          },
          width: "100%",
          background: "#F6F6F6",
        }}
      />
    </Box>
  );
};
export default CustomInput;
