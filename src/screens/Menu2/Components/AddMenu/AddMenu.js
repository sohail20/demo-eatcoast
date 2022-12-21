import React from "react";
import {Box,Typography, Button} from '@mui/material';
import dish from '../Images/dish.png';
import add from '../Images/add.png'
function AddMenu() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems:'center' }}>
        <img src={dish} />
        <Box>
          <Typography
          sx={{
            fontSize:{lg:'24px',md:'24px',sm:'18px',xs:'18px'},
            fontWeight:'600'
          }}
          >Mesopotamian cuisine</Typography>
          <Typography
          sx={{
            color:"#545359",
            width:{lg:'530px',md:'515px',sm:'300px',xs:"300px"},
            fontWeight:'400',
            fontSize:'400'
          }}
          >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
        </Box>
      </Box>
      <Box>
        <Button

        sx={{
          backgroundColor:'#2B817B',
          padding:'10px 16px',
          color:'white',
          borderRadius:"4px" ,
          '&:hover':{bgcolor:"#2B817B"}
        }}
        >
          <img src={add}/>
      
          Add Menu</Button>
      </Box>
    </>
  );
}

export default AddMenu;
