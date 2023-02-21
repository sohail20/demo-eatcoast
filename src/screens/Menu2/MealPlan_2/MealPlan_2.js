import React from 'react';
import { Box, Typography, Card, CardMedia, Button, Tab } from '@mui/material';
import arrowLeft from '../Components/Images/arrow-left.png';
import dish from '../Components/Images/dish.png';
import AddMenu from '../Components/AddMenu/AddMenu';
import BasicTabs from '../Components/MealTabs/MealTabs';
import MealCard from '../Components/MealCard/MealCard';

function MealPlan_2({ setShowMealPlan }) {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', }}>
                <Button
                    sx={{
                        fontSize: { lg: '16px', md: '16px', sm: '14px', xs: '14px' },
                        textTransform: 'capitalize'
                    }}
                >
                    <img src={arrowLeft} />
                    Cuisine
                </Button>
                <Typography
                    sx={{
                        margin: '0px auto 0 auto',
                        fontSize: { lg: '20px', md: '20px', sm: '16px', xs: '16px' },
                        fontWeight: '600'

                    }}
                >Meal Plan</Typography>
            </Box>
            <Box
                component='div'
                sx={{
                    width: '100%',
                    border: '1px solid #E1E1E6',
                    borderRadius: "8px",
                    marginTop: 3,
                    padding: 5
                }}
            >
                <Box component='div'
                    sx={{
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: 2
                    }}
                >
                    <AddMenu />


                </Box>

                <BasicTabs />
                <MealCard />

            </Box>
        </>
    );
}

export default MealPlan_2;