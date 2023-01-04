import React from "react";
import Side_Bar from "./Components/SideBar";
import HeadBar from "./Components/HeadBar/HeadBar";
import Box from "@mui/material/Box";
import CustomTabs from "./Components/Tabs/CustomTabs";
import './style.css';
import DashboardLayout from "screens/DashboardLayout/DashboardLayout";

function MealPlan() {
  return (
    <DashboardLayout>
      <Box 
        sx={{
          // display: "flex",
          mt:'0px'
        }}
      >
        <CustomTabs />
      </Box>
    </DashboardLayout>
  );
}

export default MealPlan;
