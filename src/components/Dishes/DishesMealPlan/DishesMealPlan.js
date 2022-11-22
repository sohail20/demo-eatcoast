import React from "react";
import SubHeader from "./SubHeader";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import DishesMealPlanCard from "./DishesMealPlanCard";
import DishesMealPlanTabs from "./DishesMealPlanTabs";
// import { ThemeProvider } from "@mui/material/styles";


export default function DishesMealPlan() {
  const MainBox = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    // padding: "32px",
    // gap: "20px",
  }));

  const SubBox = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    padding: "32px",
    // gap: "20px",
    // width: {xl: "1036px", lg: "1036px", md: "610px" , },
    
    border: "1px solid #E1E1E6",
    borderRadius: "8px",
  }));
  return (
  // <ThemeProvider theme={theme}> 
    <>
      <MainBox>
        <Box>
          <SubHeader />
        </Box>
      </MainBox>

      <Box
        sx={{ display: "flex",
        mt: "16px"
      }}
      >
        <SubBox sx={{
           width: {xl: "1200px", lg: "1036px", md: "610px" , sm: "500px", xs: "500px" },
           height: {xl: "596px", lg: "596px", md: "596px", sm: "700px", xs: "750px"}
          }}>
          <Box sx={{
            //  width: {xl: "1036px", lg: "1036px", md: "610px" , },
            }}
          >
            <DishesMealPlanCard />
          </Box>
          <Box
           sx={{ 
             }}>
            <DishesMealPlanTabs />
            </Box>
        </SubBox>
      </Box>
    </>
          // </ThemeProvider>

  );
}
