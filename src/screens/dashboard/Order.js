import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import RequestSection from "./Staff/Orders";
import DetailsOrder from "./Staff/Orders/Request/DetailsOrder";
import Chat from "./Staff/Orders/Chat";

const Order = () => {
  const [screen, setScreen] = useState("requestSection");

  const renderScreen = {
    chat: <Chat handleClose={() => setScreen("requestSection")} />,
    orderDetail: <DetailsOrder />,
    requestSection: (
      <RequestSection handleClickChat={() => setScreen("chat")} />
    ),
  };
  return (
    <>
      <DashboardLayout padding={screen === "chat" ? 0 : 1} showTopNav={false}>
        {renderScreen[screen]}
      </DashboardLayout>
    </>
  );
};

export default Order;
