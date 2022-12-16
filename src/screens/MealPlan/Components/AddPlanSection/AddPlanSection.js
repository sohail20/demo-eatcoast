import React from 'react';
import {Box, Typography,} from '@mui/material';
import bgimge from "../Images/bgimage.png";
function AddPlanSection() {
    return (  
        <>
        <Box
        sx={{
            display:'flex',
            alignItems:"center",
            justifyContent:'center',
            flexDirection:"column",
            marginTop:5 
        }}
        component="div">
        <img id="bgimage" src={bgimge} />

        <Typography
              sx={{
                color: "#000000",
                fontSize: "16px",
              fotntFamily:"Outfit",
              textAlign:'center'
              
              }}
            >
              You don’t have a meal plan yet, let’s start adding it
            </Typography>


        </Box>
        
        </>
    );
}

export default AddPlanSection;