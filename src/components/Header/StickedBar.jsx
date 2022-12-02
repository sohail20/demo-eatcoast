import { Box } from "@mui/material";
const StickedBar = ({ children, disabled, hasBorder }) => {
  return (
    <Box
      style={{
        position: "fixed",
        bottom: 0,
        background: "#fff",
        padding: 5,
        pointerEvents: disabled ? "none" : undefined,
        opacity: disabled ? 0.5 : undefined,
        width: "calc(100% + -64px)",
        borderTop: hasBorder ? "1px solid #E1E1E6" : undefined,
        margin: "0px -8px 0px -8px",
      }}
    >
      {children}
    </Box>
  );
};

export default StickedBar;
