import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from '@mui/material/Button'
import AddDishesSubHeader from "./AddDishesSubHeader";
import { AddDishesFieldBox } from "./AddDishesFieldBox";

export default function AddDishes() {
  return <>
  
  <Box>
    <Box mb="28px"><AddDishesSubHeader/></Box>
    <Box><AddDishesFieldBox/></Box>
  </Box>
  
  </>;
}
