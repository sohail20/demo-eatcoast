import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/system";
import { ThemeProvider } from "@mui/material";
import { Da_manager } from "../../components/dashboard/Da_manager";
import { Da_staff } from "../../components/dashboard/Da_staff";
import { getCurrentEmpoyee } from "helper";
import FullPageLoader from "components/Loader/FullPageLoader";

const theme = createTheme({
  palette: {
    tabIndecat: {
      main: "#2B817B",
    },
  },
});

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

const DashHome = () => {
  const [value, setValue] = useState(0);
  const [employeeDash, setEmployeeDash] = useState(null)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const todayDate = () => {
    let currentDate = "";
    let setToDate = "";
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "Novomber",
      "December",
    ];
    currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let Month = monthName[currentMonth];
    let fullYear = currentDate.getFullYear();
    return (setToDate = `${Month}, ${fullYear}`);
  };

  useEffect(() => {
    const user = getCurrentEmpoyee()
    if (user) setEmployeeDash(user)
  }, [])
  return employeeDash === null ? <FullPageLoader /> : (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Outfit",
          fontSize: "20px",
          color: "#1A1b24",
          lineHeight: "30px",
          fontWeight: "500",
        }}
      >
        Dashboard
      </Typography>
      {
        employeeDash.role === "staff" ? <Da_staff info={employeeDash}/> :
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{
                  sx: { backgroundColor: "#2B817B" },
                }}
                sx={{ "& button.Mui-selected": { color: "#1A1b24" } }}
              >
                <Tab
                  disableRipple={true}
                  label="Manager"
                  {...a11yProps(0)}
                  sx={{
                    marginBottom: "-20px",
                    fontFamily: "Outfit",
                    fontSize: "14px",
                    color: "#9EA3AE",
                    lineHeight: "30px",
                    fontWeight: "600",
                  }}
                />
                <Tab
                  disableRipple={true}
                  label="Staff"
                  {...a11yProps(1)}
                  sx={{
                    marginBottom: "-20px",
                    fontFamily: "Outfit",
                    fontSize: "14px",
                    color: "#9EA3AE",
                    lineHeight: "30px",
                    fontWeight: "600",
                  }}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Da_manager todayDate={todayDate} info={employeeDash}/>
            </TabPanel>
            <TabPanel value={value} index={1} >
              <Da_staff info={employeeDash}/>
            </TabPanel>
          </Box>
      }
    </Box>
  );
};

export default DashHome;
