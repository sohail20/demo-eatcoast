import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import MealCoursesCard from "./MealCoursesCard";
import AddOnCards from "./AddOnCards";
// import { createTheme} from '@mui/material/styles'
// import { ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//         primary: {
//             main: "#2b817b",
//           },

// });

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

export default function DishesMealPlanTabs() {
  
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
          textColor="#1A1824"
          indicatorColor="primary"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#2B817B",
            },
          }}
          sx={{'& .MuiTabs-indicator': { backgroundColor: "#2B817B" },
          '& .MuiTab-root': { color: "#9EA3AE" },
          '& .Mui-selected': { color: "#1A1824" },}}
        >
          <Tab
            label="Food Plan"
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
            label="Scheduled dishes"
            {...a11yProps(1)}
            sx={{
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              fontFamily: "outfit",
            }}
          />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box>
          <MealCoursesCard />
        </Box>
        <Box>
          <AddOnCards />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
