import { Paper, styled, Typography } from "@mui/material";

const MyComponent = styled(Paper)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
  gap: "10px",
  width: "148px",
  height: "24px",
  background: "#7B49E5",
  borderRadius: "6px",
  boxShadow: "none",
  flex: "none",
  order: 0,
  flexGrow: 0,
});

const LabelTypography = styled(Typography)({
  height: "20px",
  fontFamily: "Outfit",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#FFFFFF",
});

const SimpleChips = ({ label, chipColor }) => {
  return (
    <MyComponent style={{ backgroundColor: chipColor }}>
      <LabelTypography>{label}</LabelTypography>
    </MyComponent>
  );
};

export default SimpleChips;
