import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  textDecorationLine: "underline",
  color: "#2B817B",
  textTransform:"none"
}));

const UnderlineButton = ({ children, ...rest }) => {
  return (
    <CustomButton variant="text" {...rest}>
      {children}
    </CustomButton>
  );
};

export default UnderlineButton;
