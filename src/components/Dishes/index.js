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
  const [editId, setEditId] = useState(null)
  const [openBackToDish, setOpenBackToDish] = useState(false);
  const [openEditDishscreen, setOpenEditDishscreen] = useState(true);
  const [openAllDishes, setOpenAllDishes] = useState(true);

  return (
    <div>
      <AllDishesContext.Provider
        value={{
          openAllDishes,
          setOpenAllDishes,
          openEditDish,
          setOpenEditDish,
          setOpenEditDishscreen,
        }}
      >
        {openEditDish || editId !== null ? (
          <Box>
            {openBackToDish ? (
              <BackToDishes />
            ) : (
              <Box >
                <AddDishes setOpenBackToDish={setOpenBackToDish} id={editId} />
              </Box>
            )}
          </Box>
        ) : (
          <Box>
            {openAllDishes ? (
              <AllDishes
                setOpenEditDish={setOpenEditDish}
                openEditDish={openEditDish}
                handleEditDish={(e) => {
                  setEditId(e)
                }}
              />
            ) : (
              <Box>
                <DishesMealPlan />
              </Box>
            )}
          </Box>
        )}
      </AllDishesContext.Provider>
    </div>
  );
};


export default Dishes
