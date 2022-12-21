import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

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
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
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

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", minHeight: "33px" }}>
      <Box sx={{ borderBottom: "1px solid #E1E1E6", borderColor: "divider" }}>
        <Tabs
          textColor="secondary"
          indicatorColor="#2B817B"
          value={value}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#2B817B",
            },
          }}
          onChange={handleChange}
          sx={{
            "& .MuiTab-root.Mui-selected": {
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "26px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              color: "#1A1824",
            },
          }}
          aria-label="basic tabs example"
        >
          <Tab
            style={{ textTransform: "none" }}
            label="Current"
            {...a11yProps(0)}
          />
          <Tab
            style={{ textTransform: "none" }}
            label="History"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel style={{ padding: "0px" }} value={value} index={0}>
      </TabPanel>
      <TabPanel value={value} index={1}>
      </TabPanel>
    </Box>
  );
}
