import React from "react";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MenuTabs from "components/Menu/MenuTabs";

const Menu = () => {
  return (
    <>
      <DashboardLayout>
        <MenuTabs />
      </DashboardLayout>
    </>
  );
};

export default Menu;
