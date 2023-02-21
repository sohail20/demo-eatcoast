import { Box, Button, Drawer, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DishesMenu.css'


export default function DishCalander({ handleUpdateValue, isDrawerOpenStaff2, setIsDrawerOpenStaff2 }) {
    let custDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    // const CustomDate = custDate.toLocaleDateString(undefined, options);
    const [value, onChange] = useState(new Date());
    const [dishesSchedule, setdishesSchedule] = useState(true)
    const handlescheduleDate = (e) => {
        const { value } = e.target;
    }

    const dishSchedule = {
        padding: '16px 36px 16px 16px',
        width: '420px',
        height: 'auto',
        background: '#FFFFFF',
        border: '1px solid #E1E1E6',
        borderRadius: '8px'
    }

    return (
        <div>
            <Drawer anchor='right' open={isDrawerOpenStaff2}>
                <Box p={2} width="452px" textAlign={'center'} role='presentation' sx={{ overflowX: 'hidden' }}>
                    <Box sx={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='h6' component='div' textAlign={'start'} sx={{ color: '#E75C62', cursor: 'pointer' }}
                            onClick={() => setIsDrawerOpenStaff2(false)}>
                            X
                        </Typography>
                        <Typography variant='h6' component='div'  >
                            Dish Schedule
                        </Typography>
                        <Button
                            sx={{
                                textTransform: 'none',
                                width: '80px',
                                height: '40px',
                                background: '#2B817B',
                                fontWeight: '600',
                                borderRadius: '4px',
                                color: '#fff', fontFamily: 'Outfit', fontSize: '14px',
                                '&:hover': { color: '#fff', background: '#2B817B' }
                            }}
                            onClick={()=>{
                                handleUpdateValue(value.toLocaleDateString(undefined, options))
                                setIsDrawerOpenStaff2(false)
                            }}
                        >
                            Save
                        </Button>
                    </Box>
                    <Typography textAlign='start'
                        sx={{
                            fontWeight: '500',
                            color: '#1A1824', fontFamily: 'Outfit', fontSize: '14px',
                        }}
                    >Date </Typography>

                    <TextField
                        onChange={handlescheduleDate}
                        fullWidth
                        // placeholder='Search your ingredient'
                        value={value.toLocaleDateString(undefined, options)}
                        sx={{
                            color: '#1A1B24',
                            borderRadius: '6px', border: '1px solid  #E1E1E6',
                            background: '#F6F6F6',
                            '&:hover': {
                                color: '#80B3B0'
                            },
                            ".MuiOutlinedInput-notchedOutline": {
                                border: "2px solid #80B3B0 !important",
                                outline: 'none'
                            },
                        }}

                    />

                    <Calendar onChange={onChange} value={value} />
                    {dishesSchedule ? (
                        <Box component='div' mt={2} mr={2} sx={dishSchedule}>

                            {[1].map(schedule => {
                                return (
                                    <Box sx={{
                                        display: 'flex',

                                    }}>
                                        <Box mr={1}>
                                            <img src='images/DishesSchedule.png' width={'80px'} height={'60px'} />
                                        </Box>
                                        <Box >
                                            <Typography textAlign='start'>
                                                Kibbeh
                                            </Typography>
                                            <Typography textAlign='start' sx={{
                                                fontFamily: 'Outfit', color: '#9EA3AE',
                                                fontWeight: 400,
                                                fontSize: '12px'
                                            }}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply
                                            </Typography>
                                        </Box>
                                    </Box>

                                )
                            })}
                        </Box>


                    ) : (
                        <Box sx={{
                            padding: '16px 36px 16px 16px',
                            width: '420px',
                            height: '60px',
                            background: '#FFFFFF',
                            border: '1px solid #E1E1E6',
                            borderRadius: '8px', marginTop: '10px'
                        }}>
                            <Typography textAlign='center' sx={{
                                fontFamily: 'Outfit', color: '#9EA3AE',
                                fontWeight: 400,
                                fontSize: '12px'
                            }}>
                                No dishes selected in this schedule
                            </Typography>
                        </Box>)}


                </Box>

            </Drawer>
        </div>
    );
}