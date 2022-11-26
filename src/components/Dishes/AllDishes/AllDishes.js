import React from "react";
import AllDishesSubHeader from "./AllDishesSubHeader";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AllDishesMainCard from "./AllDishesMainCard";
import AllDishesTabs from "./AllDishesTabs";
import AddIcon from "@mui/icons-material/Add";

export default function AllDishes() {
  const SubBox = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    padding: "32px",
    // gap: "20px",
    // width: {xl: "1036px", lg: "1036px", md: "610px" , },
    width: "100%",

    border: "1px solid #E1E1E6",
    borderRadius: "8px",
  }));

  return (
    <>
      <AllDishesSubHeader />
      <SubBox
        sx={{
          width: {
            xl: "1200px",
            lg: "1036px",
            md: "610px",
            sm: "500px",
            xs: "500px",
          },

          height: "auto",
          padding: "32px"
        }}
      >
        <AllDishesMainCard
          title={"Main Course"}
          subTitle={"No dishes added"}
          image={"./images/MainCourse.svg"}
          icon={<AddIcon />}
          BtnName={"Add Dishes"}
          hasToInput = {true}

        />
        <Box>
          <AllDishesTabs />
        </Box>
      </SubBox>
    </>
  );
}
