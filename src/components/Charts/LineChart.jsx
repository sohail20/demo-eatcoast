import * as React from "react";
import { styled } from "@mui/material/styles";
import {Box,Stack} from "@mui/material";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import StarIcon from "@mui/icons-material/Star";
import { LightTitle } from "../Typography";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FAA641" : "#308fe8",
  },
}));

export default function CustomizedLineChart() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <LightTitle>5</LightTitle>
      <StarIcon style={{ color: "#FAA641" }} />
      <Box sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={50} />
      </Box>
      <LightTitle>50%</LightTitle>
    </Box>
  );
}
