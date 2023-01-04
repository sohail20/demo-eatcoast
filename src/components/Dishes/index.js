import React from "react";
import { useState } from "react";
import AddDishes from "./AddDishes/AddDishes";
import Box from "@mui/material/Box";
import DishesMealPlan from "./DishesMealPlan/DishesMealPlan";
import AllDishes from "./AllDishes/AllDishes";
import { BackToDishes } from "./AddDishes/BackToDishes/BackToDishes";
import { EditDishes } from "./EditDishes/EditDishes";
import { useContext, createContext } from "react";
import { AllDishesContext } from "./Context";
import DashboardLayout from "screens/DashboardLayout/DashboardLayout";
// const AllDishesContext = createContext(null);

const Dishes = () => {
  const [openEditDish, setOpenEditDish] = useState(false);
  const [openBackToDish, setOpenBackToDish] = useState(false);
  const [openEditDishscreen, setOpenEditDishscreen] = useState(false);
  const [openAllDishes, setOpenAllDishes] = useState(false);
  console.log("dishes", openEditDishscreen);
  
  return (
    <div>
      <DashboardLayout>
        adasdasjdkh
        <AllDishesContext.Provider
          value={{
            openAllDishes,
            setOpenAllDishes,
            openEditDish,
            setOpenEditDish,
            setOpenEditDishscreen,
          }}
        >
          {openEditDish ? (
            <Box>
              {openBackToDish ? (
                <BackToDishes />
              ) : (
                <Box ><AddDishes setOpenBackToDish={setOpenBackToDish} /></Box>
              )}
            </Box>
          ) : (
            <>
              {openEditDishscreen ? (
                <EditDishes />
              ) : (
                <Box>
                  {openAllDishes ? (
                    <AllDishes
                      setOpenEditDish={setOpenEditDish}
                      openEditDish={openEditDish}
                      setOpenEditDishscreen={setOpenEditDishscreen}
                    />
                  ) : (
                    <Box>
                      {/* <DishesMealPlan setOpenAllDishes={setOpenAllDishes} /> */}
                      <DishesMealPlan />
                    </Box>
                  )}
                </Box>
              )}
            </>
          )}
        </AllDishesContext.Provider>
      </DashboardLayout>
    </div>
  );
};


export default Dishes
