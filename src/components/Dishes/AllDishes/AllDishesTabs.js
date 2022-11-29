import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NoDishesAdded from "./NoDishesAdded";
import { AllDishesCard } from "./AllDishesCard";
import { AllDishesData } from "./Config";
import { AllDishesData2 } from "./Config";
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
        <Box sx={{ pt: "24px" }}>
          <Typography sx={{ fontFamily: "outfit" }}>{children}</Typography>
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

export default function AllDishesTabs({onHandleClick}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{borderBottom: "1px solid #E1E1E6", borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="#1A1824"
          // // textColor="secondary"
          // indicatorColor="#2B817B"
          // TabIndicatorProps={{
          //   style: {
          //     backgroundColor: "#2B817B",
          //   },
          // }}
          sx={{'& .MuiTabs-indicator': { backgroundColor: "#2B817B" },
          '& .MuiTab-root': { color: "#9EA3AE" },
          '& .Mui-selected': { color: "#1A1824" },}}
        >
          <Tab
            label="Active"
            {...a11yProps(0)}
            sx={{
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              fontFamily: "outfit"
            }}
          />
          <Tab
            label="Not active"
            {...a11yProps(1)}
            sx={{
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              fontFamily: "outfit"
            }}
          />
          <Tab
            label="Under review"
            {...a11yProps(2)}
            sx={{
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              fontFamily: "outfit"
            }}
          />
          <Tab
            label="Draft"
            {...a11yProps(3)}
            sx={{
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              fontFamily: "outfit"
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {
          false? (<NoDishesAdded />)
          : 
          (
            <AllDishesCard AllDishesData={AllDishesData2} />
          )
        }
        
      </TabPanel>
      <TabPanel value={value} index={1}>
      <AllDishesCard AllDishesData={AllDishesData2} onHandleClick={onHandleClick}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <AllDishesCard AllDishesData={AllDishesData} />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <AllDishesCard AllDishesData={AllDishesData2} />
      </TabPanel>
    </Box>
  );
}
