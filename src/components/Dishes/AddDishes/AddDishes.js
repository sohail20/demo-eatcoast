import React from "react";
import {useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from '@mui/material/Button'
import AddDishesSubHeader from "./AddDishesSubHeader";
import { AddDishesFieldBox } from "./AddDishesFieldBox";

export default function AddDishes() {
  const [disabled , setDisabled] = useState("disabled")
  return <>
  
  <Box>
    <Box mb="28px"><AddDishesSubHeader disabled={disabled} setDisabled={setDisabled} /></Box>
    <Box><AddDishesFieldBox disabled={disabled} setDisabled={setDisabled} /></Box>
  </Box>
  
  </>;
}
