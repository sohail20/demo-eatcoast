import React from 'react'
import { AddDishesFieldBox } from '../AddDishes/AddDishesFieldBox'
import EditDishesSubHeader from './EditDishesSubHeader'
import { StatusAlert } from './StatusAlert'
import {useState} from "react";
import Box from "@mui/material/Box";


export const EditDishes = () => {
    const [disabled , setDisabled] = useState("disabled")
  return (
    <div>
        <>
        <Box><EditDishesSubHeader/></Box>
        <Box ><StatusAlert/></Box>
        <Box sx={{mt:{sm: "40px", xs: "40px"}}}><AddDishesFieldBox disabled={disabled} setDisabled={setDisabled} /></Box>
        </>

    </div>
  )
}
