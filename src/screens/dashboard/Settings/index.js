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
import { useAddRestaurantMutation } from "api/restaurant";

const Settings = () => {
  const [addRestaurantData, setAddRestaurantData] = useState([]);
  const [currentPage, setCurrentTab] = useState("dashboard");
  const [addRestaurant, { isLoading }] = useAddRestaurantMutation();

  const handleSubmit = (values) => {
    let formData = new FormData(); //formdata object
    let addressData = {};
    Object.keys(values).map((keys) => {
      if (
        keys === "lat" ||
        keys === "lng" ||
        keys === "address" ||
        keys === "note"
      )
        Object.assign(addressData, { [keys]: values[keys] });
      else formData.append(keys, values[keys]);
    });

    formData.append("address", values.address);
    addRestaurant(formData);
  };
  const renderTab = {
    profile: (
      <Profile
        handleChangeAddress={(e) => {
          setAddRestaurantData(e);
          setCurrentTab("changeAddress");
        }}
        handleBack={() => setCurrentTab("dashboard")}
      />
    ),
    dashboard: <DashBoard handleChangeScreen={(id) => setCurrentTab(id)} />,
    helpCenter: <HelpCenter handleBack={() => setCurrentTab("dashboard")} />,
    documents: (
      <DocumentEmployee handleBack={() => setCurrentTab("dashboard")} />
    ),
    contactSupport: <Chat title="Live Chat" handleClose={() => setCurrentTab("dashboard")} />,
    changeAddress: (
      <ChangeLocation
        handleClose={() => setCurrentTab("profile")}
        handleSubmitForm={(e) => {
          handleSubmit({ ...addRestaurantData, ...e });
        }}
      />
    ),
    customerFeedback: (
      <CustomerFeedbackDashboard
        handleBack={() => setCurrentTab("dashboard")}
      />
    ),
  };
  return (
    <>
      <DashboardLayout>
        {isLoading ? <p>Loading...</p> : renderTab[currentPage]}
      </DashboardLayout>
    </>
  );
};

export default Settings;
