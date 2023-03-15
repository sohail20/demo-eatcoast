import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NoDishesAdded from "./NoDishesAdded";
import { AllDishesCard } from "./AllDishesCard";
import { AllDishesData } from "./Config";
import { AllDishesData2 } from "./Config";
import { useGetDishesByStatusQuery } from "api/dishes";
import FullPageLoader from "components/Loader/FullPageLoader";
import { generateImageURL } from "helper";
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

export default function AllDishesTabs({ onHandleClick, handleEditDish }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: "1px solid #E1E1E6", borderBottom: 1, borderColor: "divider" }}>
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
          sx={{
            '& .MuiTabs-indicator': { backgroundColor: "#2B817B" },
            '& .MuiTab-root': { color: "#9EA3AE" },
            '& .Mui-selected': { color: "#1A1824" },
          }}
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
        <Dishes status={"active"} handleEditDish={handleEditDish} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Dishes status={"inactive"} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Dishes status={"request"} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Dishes status={"draft"} />
      </TabPanel>
    </Box>
  );
}



const Dishes = ({ status, handleEditDish }) => {
  const [dishesData, setDishesData] = useState([])
  const { data: activeDishes, isLoading } = useGetDishesByStatusQuery(`page=1&size=2&orderBy=desc&sortBy=${status}`)
  useEffect(() => {
    if (activeDishes && activeDishes.data) {
      const dishTmp = []
      activeDishes.data.map((item) => {
        dishTmp.push({ id: item._id, title: item.name, subTitle: item.description, image: generateImageURL("dishImages", item.image) })
      })
      setDishesData(dishTmp)
    }
  }, [activeDishes])
  return isLoading ? <FullPageLoader /> : (
    <>
      {
        dishesData.length === 0 ?
          <NoDishesAdded />
          :
          <AllDishesCard
            AllDishesData={dishesData}
            handleEditDish={(e) => {
              handleEditDish(e)
            }}
          />
      }
    </>
  )
}
