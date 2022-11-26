import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Box, TextField, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

export const CustomCloseIcon = ({ paddingTop }) => {
  return (
    <>
      <Box
        sx={{
          pl: "20px",
          // pt: "5px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton sx={{
          //  padding: 0, minHeight: 0, minWidth: 0 
        }}>
          <CloseIcon
            sx={{
              fill: "#E75C62",
              width: "16px",
              height: "16px",
            }}
          />
        </IconButton>
      </Box>
    </>
  );
};
