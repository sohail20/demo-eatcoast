import React from 'react'
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useContext, createContext } from "react";
import { AllDishesContext } from '../Context';



export default function AllDishesSubHeader() {
  const {openAllDishes,setOpenAllDishes} = useContext(AllDishesContext)

    const Heading1 = styled("div")(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "24px",
        color: "#2B817B",
        textTransform: "capitalize",
      }));
    
      const Typo1 = styled("div")(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        fontFamily: "outfit",
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "28px",
        textTransform: "capitalize",
        [theme.breakpoints.down('lg')]:{
          fontSize: "20px",
      }
      }));


  return (
<>
      <Box sx={{ display: "flex" }}>
        <Box sx={{width:{lg: "20%", md: "20%", sm: "20%", xs: "30%"}}}>          
            <Box >
            <Button width="20%" onClick={() => setOpenAllDishes(false)} >
              <Box sx={{ display: "flex",
              //  alignItems: "center" 
               }}>
                <img
                  src="./images/leftArrow.svg"
                  alt=""
                  width="16px"
                  height="16px"
                />
              </Box>
              <Box pl="14px">
                <Heading1 >Back</Heading1>
              </Box>
            </Button>
            </Box>
        </Box>


        <Box  sx={{ display: "flex", justifyContent: "center", width:{lg: "50%", md: "50%", sm: "50%", xs: "50%"} }}>
          <Typo1 variant="body1" color="initial">
            All Dishes
          </Typo1>
        </Box>
      </Box>
    </>
    )
}
