import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import CloseHeader from "components/Header/CloseHeader";
import ProfileSettings from "./ProfileSettings";
import RestaurantSettings from "./RestaurantSettings";
import { getCurrentEmpoyee } from "helper";

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

export default function Profile({handleChangeAddress, handleBack }) {
  const [value, setValue] = React.useState(0);
  const [userData,setUserData] = React.useState({})
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(()=>{
    const user = getCurrentEmpoyee()
    if(user) setUserData(user)
  },[])

  return (
    <Box sx={{ width: "100%" }}>
      <CloseHeader label="back" variant="back" handleClose={handleBack}/>
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
            label="Profile Settings"
            {...a11yProps(2)}
            sx={{
              fontWeight: "600",
              fontSize: { lg: "14px", md: "14px", sm: "10px", xs: "10px" },
              color: "#9EA3AE",
            }}
          />
          <Tab
            style={{ textTransform: "none" }}
            label="Restaurant Settings"
            {...a11yProps(3)}
            sx={{
              fontWeight: "600",
              fontSize: { lg: "14px", md: "14px", sm: "10px", xs: "10px" },
              color: "#9EA3AE",
            }}
          />
        </Tabs>
      </Box>

      <TabPanel style={{ padding: "0px" }} value={value} index={0}>
        <ProfileSettings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RestaurantSettings handleChangeAddress={(formValues,id)=>{
          handleChangeAddress(formValues,id)
          }}/>
      </TabPanel>
    </Box>
  );
}
