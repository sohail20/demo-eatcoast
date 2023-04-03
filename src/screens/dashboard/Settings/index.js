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
import { useAddRestaurantMutation, useUpdateRestaurantMutation } from "api/restaurant";
import { PrivacyPolicy } from "components/PrivacyPolicy/PrivacyPolicy";

const Settings = () => {
  const [addRestaurantData, setAddRestaurantData] = useState([]);
  const [hasRestaurantID, setHasRestaurantID] = useState(null)
  const [currentPage, setCurrentTab] = useState("dashboard");
  const [addRestaurant, { isLoading }] = useAddRestaurantMutation();
  const [updatedRestaurant, { isLoading: isUpdating }] = useUpdateRestaurantMutation()
  const handleSubmit = (values) => {
    let formData = new FormData(); //formdata object
    Object.keys(values).map((keys) => {
      formData.append(keys, values[keys]);
    });

    if (hasRestaurantID !== null) updatedRestaurant({ id: hasRestaurantID, data: formData })
    else addRestaurant(formData);
  };
  const renderTab = {
    profile: (
      <Profile
        handleChangeAddress={(e, id) => {
          if (id !== undefined)
            setHasRestaurantID(id)
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
        addRestaurantData={addRestaurantData}
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
    privacy: <PrivacyPolicy handleBack={() => setCurrentTab("dashboard")}/>
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
