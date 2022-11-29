import React from "react";
import AllDishesSubHeader from "./AllDishesSubHeader";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AllDishesMainCard from "./AllDishesMainCard";
import AllDishesTabs from "./AllDishesTabs";
import AddIcon from "@mui/icons-material/Add";
import { DetailDishesDrawer } from "./DetailDishes/DetailDishesDrawer";
import { useState, useRef } from "react";
import { DetailDishesMainCard } from "./DetailDishes/DetailDishesMainCard";

export default function AllDishes() {

  const SubBox = styled("div")(({ theme }) => ({
    padding: "32px",
    width: "100%",
    border: "1px solid #E1E1E6",
    borderRadius: "8px",
  }));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);
  const [openDrawer3, setOpenDrawer3] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenDrawer(true);
  };

  return (
    <>
     <Box sx={{paddingLeft: "32px", paddingRight: "32px"}}>
     <Box mb="16px"><AllDishesSubHeader /></Box>
      <SubBox
      
        sx={{
          width: {
            xl: "100%",
            // lg: "1036px",
            lg: "100%",
            md: "100%",
            sm: "100%",
            xs: "100%",
          },

          height: "auto",
          padding: "32px"
        }}
      >
        <AllDishesMainCard
          title={"Main Course"}
          subTitle={"No dishes added"}
          image={"./images/MainCourse.svg"}
          icon={<AddIcon sx={{width: "16px", height: "16px"}}/>}
          BtnName={"Add Dishes"}
          hasToInput = {true}
          onHandleClick={handleClick}

        />
        <Box>
          <AllDishesTabs onHandleClick={handleClick} />
        </Box>

        <Box>
        <DetailDishesDrawer
          setOpenDrawer={setOpenDrawer}
          // setPlaceholderSched={setPlaceholderSched}
          openDrawer={openDrawer}
          Component={<DetailDishesMainCard  />}
          title={"Detail dishes"}
        />
      </Box>
      </SubBox>
     </Box>
    </>
  );
}
