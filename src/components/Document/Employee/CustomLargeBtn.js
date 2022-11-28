import React from "react";
import {
  Box,
  IconButton,
  styled,
  Typography,
  Stack,
  Checkbox,
  Button,
  TextField,
} from "@mui/material";

export const CustomLargeBtn = ({ label, variantType,  }) => {
  const Button1 = styled(Button)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: 600,
    fontSize: "14px",
    color: variantType==="outlined" ? "#2B817B" : "#FFFFFF",
    lineHeight: "20px",
    textTransform: "capitalize",
    backgroundColor: variantType==="outlined" ? "" : "#2B817B",
    padding: "8px, 24px, 8px, 24px",
    borderRadius: "4px",
    borderColor: variantType==="outlined" ? "#2B817B" : "",
    width: "596px",
    height: "36px",
    "&:hover": {
      backgroundColor: variantType==="outlined" ? "" : "#2B817B",
      borderColor: variantType==="outlined" ? "#2B817B" : "",
    },
  }));

  return (
    <div>
      <Button1 variant={variantType}>{label}</Button1>
    </div>
  );
};
