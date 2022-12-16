// import React from "react";
// import MenuTabs from "../../components/Menu/MenuTabs";
// import DashboardLayout from "../DashboardLayout/DashboardLayout";

// const Menu = () => {
//   return (
//     <>
//       <DashboardLayout>
//         <MenuTabs/>
//       </DashboardLayout>
//     </>
//   );
// };

// export default Menu;

// import React from "react";
// import MealPlan from "../MealPlan/MealPlan";
// import DashboardLayout from "../DashboardLayout/DashboardLayout";

// const Menu = () => {
//   return (
//     <>
//       <DashboardLayout>
// <MealPlan />
//       </DashboardLayout>
//     </>
//   );
// };

// export default Menu

// import React from "react";
// import DishesMealPlan from "../../components/Dishes/DishesMealPlan/DishesMealPlan";
// import DashboardLayout from "../DashboardLayout/DashboardLayout";

// const Menu = () => {
//   return (
//     <>
//       <DashboardLayout>
//         <DishesMealPlan/>
//       </DashboardLayout>
//     </>
//   );
// };

// export default Menu

// import React from "react";
// import AllDishes from "../../components/Dishes/AllDishes/AllDishes";
// import DashboardLayout from "../DashboardLayout/DashboardLayout";

// const Menu = () => {
//   return (
//     <>
//       <DashboardLayout>
//         <AllDishes/>
//       </DashboardLayout>
//     </>
//   );
// };

// export default Menu

// import React from "react";
// import AddDishes from "../../components/Dishes/AddDishes/AddDishes";
// import DashboardLayout from "../DashboardLayout/DashboardLayout";

// const Menu = () => {
//   return (
//     <>
//       <DashboardLayout>
//         <AddDishes/>
//       </DashboardLayout>
//     </>
//   );
// };

// export default Menu

// import React from "react";
// import MealPlan from "../MealPlan/MealPlan";
// import DashboardLayout from "../DashboardLayout/DashboardLayout";
// import { DocumentEmployee } from "../../components/Document/Employee/DocumentEmployee";
// import { DocumentEmployee2 } from "../../components/Document/Employee/DocumentEmployee2";

// const Menu = () => {
//   return (
//     <>
//       <DashboardLayout>
//         {/* <DocumentEmployee /> */}
//         <DocumentEmployee2/>
//       </DashboardLayout>
//     </>
//   );
// };

// export default Menu

import React from "react";
import MealPlan from "../MealPlan/MealPlan";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import { DocumentEmployee } from "../../components/Document/Employee/DocumentEmployee";
import { DocumentEmployee2 } from "../../components/Document/Employee/DocumentEmployee2";
import { HelpCenter } from "../../components/HelpCenter/HelpCenterSection/HelpCenter";
import MenuTabs from "../../components/Menu/MenuTabs";

const Menu = () => {
  return (
    <>
      <DashboardLayout>
        <MenuTabs />
        {/* <HelpCenter/> */}
      </DashboardLayout>
    </>
  );
};

export default Menu;
