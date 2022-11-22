import React from 'react'
import AllDishesSubHeader from './AllDishesSubHeader'
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AllDishesCard from './AllDishesCard';
import AllDishesTabs from './AllDishesTabs';

export default function AllDishes() {
    const SubBox = styled("div")(({ theme }) => ({
        // padding: theme.spacing(0, 2),
        padding: "32px",
        // gap: "20px",
        // width: {xl: "1036px", lg: "1036px", md: "610px" , },
        
        border: "1px solid #E1E1E6",
        borderRadius: "8px",
      }));

  return (
    <>
    <AllDishesSubHeader/>
    <SubBox sx={{
           width: {xl: "1200px", lg: "1036px", md: "610px" , sm: "500px", xs: "500px" },
           height: {xl: "344px", lg: "344px", md: "344px", sm: "700px", xs: "750px"}
          }}>
            <AllDishesCard/>
            <Box>
            <AllDishesTabs/>
        </Box>
          </SubBox>
        
    </>
    )
}
