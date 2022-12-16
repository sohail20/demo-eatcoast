import React, { useState } from "react";
import { Box } from "@mui/material";
import DashboardLayout from "../../DashboardLayout/DashboardLayout";
import CustomerFeedbackDashboard from "./CustomerFeedback/CustomerFeedbackDashboard";
import DashBoard from "screens/Setting/SettingScreen";
const Settings = () => {
  const [currentPage, setCurrentTab] = useState("dashboard");
  const renderTab = {
    dashboard: <DashBoard handleChangeScreen={(id) => setCurrentTab(id)} />,
    customerFeedback: (
      <CustomerFeedbackDashboard
        handleBack={(id) => setCurrentTab("dashboard")}
      />
    ),
  };
  return (
    <>
      <DashboardLayout>{renderTab[currentPage]}</DashboardLayout>
    </>
  );
};

export default Settings;
