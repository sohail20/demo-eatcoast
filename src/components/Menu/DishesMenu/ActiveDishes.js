import React from 'react'
import { Box, Typography } from '@mui/material'

export const ActiveDishes = ({ title }) => {
    return (
        <Box sx={{marginTop: '70px'}}>
            <Box textAlign={'center'} >

                <img src='images/MenuBg.png' alt='' />

            </Box>
            <Typography textAlign={'center'} sx={{ marginTop: '10px', fontFamily: 'Outfit', fontSize: '18px', color: '#000000', lineHeight: '26px', fontWeight: '400' }}>
                {title }  
            </Typography>
        </Box>
    )
}