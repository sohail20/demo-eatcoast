import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DetailDishesIngridientCard } from "./DetailDishesIngridientCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DetailDishesTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          // textColor="#1A1824"
          // indicatorColor="#2B817B"
          // TabIndicatorProps={{
          //   style: {
          //     backgroundColor: "#2B817B",
          //   },
          // }}
          textColor="#1A1824"
          padding="0px"
          // // textColor="secondary"
          // indicatorColor="#2B817B"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#2B817B",
              paddingTop: "0px",
              margin: "0px",
            },
          }}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#2B817B",
              height: "4px",
            },
            "& .MuiTab-root": {
              color: "#9EA3AE",
              fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "12px" },
              fontWeight: "400",
              lineHeight: "25.6px",
              paddingBottom: "0px",
              paddingLeft: { lg: "15px", md: "15px", sm: "auto", xs: "0px" },
              //   paddingTop : "0px"
            },
            "& .Mui-selected": {
              color: "#1A1824",
              fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "12px" },
              fontWeight: "600",
              lineHeight: "25.6px",
            },
          }}
          // sx={{'& .MuiTabs-indicator': { backgroundColor: "#2B817B" },
          // '& .MuiTab-root': { color: "#9EA3AE" },
          // '& .Mui-selected': { color: "#1A1824" },}}
        >
          <Tab
            label="Ingridient"
            {...a11yProps(0)}
            sx={{
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              fontFamily: "outfit",
            }}
          />
          <Tab
            label="Nutritional Info"
            {...a11yProps(1)}
            sx={{
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              fontFamily: "outfit",
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DetailDishesIngridientCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
