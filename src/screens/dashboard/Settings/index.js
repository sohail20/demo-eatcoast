import React from "react";
import { Box } from "@mui/material";
import DashboardLayout from "../../DashboardLayout/DashboardLayout";
import CustomerFeedbackDashboard from "./CustomerFeedback/CustomerFeedbackDashboard";

const Settings = () => {
  return (
    <>
      <DashboardLayout>
          <CustomerFeedbackDashboard />
      </DashboardLayout>
    </>
  );
};

export default Settings;
