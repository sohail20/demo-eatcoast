import React, { useState } from "react";
import { Box } from "@mui/material";
import DashboardLayout from "../../DashboardLayout/DashboardLayout";
import CustomerFeedbackDashboard from "./CustomerFeedback/CustomerFeedbackDashboard";
import DashBoard from "screens/Setting/SettingScreen";
import HelpCenter from "components/HelpCenter/HelpCenterSection/HelpCenter";
import DocumentEmployee from "components/Document/Employee/DocumentEmployee";
import Chat from "../Staff/Orders/Chat";
import Profile from "./Profile";
import ChangeLocation from "./Profile/ChangeLocation";

const Settings = () => {
  const [currentPage, setCurrentTab] = useState("dashboard");
  const renderTab = {
    profile: (
      <Profile
        handleChangeAddress={() => setCurrentTab("changeAddress")}
        handleBack={() => setCurrentTab("dashboard")}
      />
    ),
    dashboard: <DashBoard handleChangeScreen={(id) => setCurrentTab(id)} />,
    helpCenter: <HelpCenter handleBack={() => setCurrentTab("dashboard")} />,
    dokumens: (
      <DocumentEmployee handleBack={() => setCurrentTab("dashboard")} />
    ),
    contactSupport: <Chat title="Live Chat" />,
    changeAddress: (
      <ChangeLocation handleClose={() => setCurrentTab("profile")} />
    ),
    customerFeedback: (
      <CustomerFeedbackDashboard
        handleBack={() => setCurrentTab("dashboard")}
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
