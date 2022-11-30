import React from "react";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import RequestSection from "./Staff/Orders";
import DetailsOrder from "./Staff/Orders/Request/DetailsOrder";
const Order = () => {
  return (
    <>
      <DashboardLayout padding={1}>
        {false ? <RequestSection /> : <DetailsOrder />}
      </DashboardLayout>
    </>
  );
};

export default Order;
