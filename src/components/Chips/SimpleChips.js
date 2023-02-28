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

const SubsChipColor = {
  "fitness-subscription": {
    label: "Fitness subscription",
    color: "#FF8D85"
  },
  "personal-subscription": {
    label: "Personal subscription",
    color: "#7B49E5"
  },
  "multiple-subscription":{
    label:"Multiple subscription",
    color:"#158FAD"
  },
  "dietary-subscription":{
    label:"Dietary Subscription",
    color:"#FF8D85"
  },
  "bussines-subscription": {
    label: "Bussines subscription",
    color: "#FF9933"
  },
  "single-order": { label: "Single order", color: "#7ECC49" },
  "on-progress": { label: "On Progress", color: "#FAA641" },
  cooked: { label: "Cooked", color: "#42C677" },
  packed: { label: "Packed", color: "#42C677" },
};

const SimpleChips = ({ label, chipColor }) => {
  return (
    <MyComponent
      style={{
        backgroundColor: SubsChipColor.hasOwnProperty(label)
          ? SubsChipColor[label].color
          : chipColor,
      }}
    >
      {SubsChipColor && SubsChipColor[label] && <LabelTypography>{SubsChipColor[label].label}</LabelTypography>}
    </MyComponent>
  );
};

export default SimpleChips;
