import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Menu from "../../screens/dashboard/Menu";
import { MenuComponent } from ".";
import Draft from "./AddMealPlan/Draft/Draft";
import { DishesMenu } from "./DishesMenu/DishesMenu";

export default function MenuTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="#1A1824"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#2B817B",
              },
            }}
          >
            <Tab
              label="Meal Plan"
              value="1"
              sx={{
                fontFamily: "Outfit",
                fontSize: "18px",
                fontWeight: "600",
                color: "#1A1824",
                textTransform: "capitalize",
              }}
            />
            <Tab
              label="Dishes"
              value="2"
              sx={{
                fontFamily: "Outfit",
                fontSize: "18px",
                fontWeight: "600",
                color: "#9EA3AE",
                textTransform: "capitalize",
              }}
            />
            <Tab
              label="Draft"
              value="3"
              sx={{
                fontFamily: "Outfit",
                fontSize: "18px",
                fontWeight: "600",
                color: "#9EA3AE",
                textTransform: "capitalize",
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <MenuComponent />
        </TabPanel>
        <TabPanel value="2">
          <DishesMenu />
        </TabPanel>
        <TabPanel value="3">
          <Draft />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
