import styled from '@emotion/styled';
import { Box, Button, Container, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import SwitchButton from '../../Dishes/AddDishes/SwitchButton';
import DishMenuSlider from './DishMenuSlider';
import DishMenuSlider1 from './DishMenuSlider1';
import DishesCalander from './DishesCalander';
import Overlay from './overlay/Overlay';
import { addIngredient, addNutrition } from './configdishes';

const Typo1 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
    color: "#9EA3AE",
}));
const Typo2 = styled(Typography)(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
}));

const Button1 = {
    // padding: theme.spacing(0, 2),
    fontFamily: "outfit",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#2B817B",
    marginTop: '10px'
}

export default function DishesStepper3({ formik }) {
    const [selectedModal, setSelectedModal] = React.useState(null)
    const [ingridientsValue, setIngridientsValue] = React.useState("")
    const [nutritionValue, setNutritionValue] = React.useState("")
    const [scheduled, setScheduled] = React.useState("")

    const [isDrawerOpenStaff2, setIsDrawerOpenStaff2] = React.useState(false)

    return (
        <>
            {/* <Container maxWidth="xs" > */}
            <Container>
                <Box
                    width="100%"
                    sx={{
                        pl: { lg: "50px", md: "50px", sm: "0px", xs: "0px" },
                        pt: { lg: "0px", md: "0px", sm: "70px", xs: "70px" }, mt: 6
                    }}
                >
                    <Box>
                        <Box
                            sx={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <Box>
                                <Typo2>Status :</Typo2>
                                <Typo1 width="100%" sx={{ pr: { lg: "0px", md: "0px", sm: "100%", xs: "20px" } }}>
                                    *If the plate is active it will be visible to the customer
                                </Typo1>
                            </Box>
                            <Box sx={{ ml: 1 }}>
                                <SwitchButton />
                            </Box>
                        </Box>

                        <Box pt="1">
                            <Box>
                                <Box sx={{ pt: "9px", pb: "8px" }}>
                                    <Typo2 display="inline">Ingridients </Typo2>
                                    <Typo2 display="inline" color="#9EA3AE">
                                        {" "}
                                        ( Optional )
                                    </Typo2>
                                </Box>
                                <Box>
                                    <TextField
                                        fullWidth
                                        onClick={() => setSelectedModal("ingridients")}
                                        id="filled-textarea"
                                        placeholder="Select ingridients"
                                        variant="outlined"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    <img src="./images/arrow-right.svg" alt="" />
                                                </InputAdornment>
                                            ),
                                            style: {
                                                height: "48px",
                                            },
                                        }}
                                        value={ingridientsValue}
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            lineHeight: "20px",
                                            borderRadius: "6px",
                                            border: "1px solid #E1E1E6",
                                            backgroundColor: "#F6F6F6",
                                            color: "#9EA3AE",
                                            //   '& .MuiTextField-root': {  height: '48px' },
                                        }}
                                    />
                                </Box>
                            </Box>

                            <Box>
                                <Box sx={{ pt: "9px", pb: "8px" }}>
                                    <Typo2 display="inline">Nutritional information </Typo2>
                                    <Typo2 display="inline" color="#9EA3AE">
                                        {" "}
                                        ( Optional )
                                    </Typo2>
                                </Box>
                                <Box>
                                    <TextField
                                        onClick={() => setSelectedModal("nutrition")}
                                        fullWidth
                                        id="filled-textarea"
                                        placeholder="Select nutritional info"
                                        variant="outlined"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    <img src="./images/arrow-right.svg" alt="" />
                                                </InputAdornment>
                                            ),
                                            style: {
                                                height: "48px",
                                            },
                                        }}
                                        value={nutritionValue}
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            lineHeight: "20px",
                                            borderRadius: "6px",
                                            border: "1px solid #E1E1E6",
                                            backgroundColor: "#F6F6F6",
                                            color: "#9EA3AE",
                                        }}
                                    />
                                </Box>
                            </Box>

                            <Box>
                                <Box sx={{ pt: "9px", pb: "8px" }}>
                                    <Typo2 display="inline">Scheduled dishes </Typo2>
                                    <Typo2 display="inline" color="#9EA3AE">
                                        {" "}
                                        ( Optional )
                                    </Typo2>
                                </Box>
                                <Box>
                                    <TextField
                                        onClick={() => setIsDrawerOpenStaff2(true)}
                                        fullWidth
                                        id="filled-textarea"
                                        placeholder="Select scheduled dishes"
                                        variant="outlined"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    <img src="./images/arrow-right.svg" alt="" />
                                                </InputAdornment>
                                            ),
                                            style: {
                                                height: "48px",
                                            },
                                        }}
                                        value={scheduled}
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            lineHeight: "20px",
                                            borderRadius: "6px",
                                            border: "1px solid #E1E1E6",
                                            backgroundColor: "#F6F6F6",
                                            color: "#9EA3AE",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* //addIngredient */}
                <DishMenuSlider 
                 selectedModal={selectedModal} 
                 addIngredient={selectedModal === "nutrition" ? addNutrition : addIngredient} 
                 formik={formik} 
                 setIsDrawerOpenStaff={setSelectedModal} 
                 handleUpdateValue={(type, value) => {
                    if (type == "nutrition") setNutritionValue(value)
                    else setIngridientsValue(value)
                 }} 
                 isDrawerOpenStaff={selectedModal !== null} 
                />

                <DishesCalander handleUpdateValue={(e)=>{
                  setScheduled(e)
                }} setIsDrawerOpenStaff2={setIsDrawerOpenStaff2} isDrawerOpenStaff2={isDrawerOpenStaff2} />
            </Container>


        </>

    )
}
