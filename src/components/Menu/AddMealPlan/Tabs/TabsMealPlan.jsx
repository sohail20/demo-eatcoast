import * as React from "react";
import { Box, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomIconButton from "../../../Button/CustomIconButton";
import SmallInfoCard from "../../../Cards/SmallInfoCard";
import { FlexBoxContainer } from "../../../Containers";
import { H1Typo } from "../../../Typography";
import LightTitle from "../../../Typography/LightTitle";
import FoodPlan from "./FoodPlan";
import ScheduledDishes from "./ScheduledDishes";

const TopConainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "32px",
  gap: "24px",
  width: "100%",
  height: "auto",
  background: "#FFFFFF",
  border: "1px solid #E1E1E6",
  borderRadius: "8px",
}));

const CustomPaper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  width: "100%",
  height: "96px",
  background: " #FFFFFF",
  border: "1px solid #E1E1E6",
  borderRadius: "8px",
}));

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

function MealTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
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
            label="Food Plan"
            {...a11yProps(2)}
            sx={{
              fontWeight: "600",
              fontSize: { lg: "14px", md: "14px", sm: "10px", xs: "10px" },
              color: "#9EA3AE",
            }}
          />
          <Tab
            style={{ textTransform: "none" }}
            label="Scheduled dishes"
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
        <FoodPlan />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ScheduledDishes />
      </TabPanel>
    </Box>
  );
}

const TabsMealPlan = ({ hasTabs }) => {
  return (
    <Box mt={5}>
      <TopConainer>
        <SmallInfoCard
          borderLess
          data={{
            img: "https://picsum.photos/200",
            heading: "Mesopotamian cuisine",
            address:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          }}
          hasAddButton
        />

        {hasTabs ? <MealTabs /> : <NoDataRendering hasAddButton />}
      </TopConainer>
    </Box>
  );
};

export const NoDataRendering = ({ hasAddButton }) => {
  return (
    <>
      <FlexBoxContainer style={{ width: "100%" }}>
        <LightTitle>Meal Courses</LightTitle>
        {hasAddButton && (
          <CustomIconButton
            label="Add Item"
            variant={"outlined"}
            icon={<AddIcon style={{ color: "#2B817B" }} />}
          />
        )}
      </FlexBoxContainer>
      <CustomPaper marginTop={3} marginBottom={3}>
        <LightTitle>No Meal Courses added</LightTitle>
      </CustomPaper>

      <FlexBoxContainer style={{ width: "100%" }}>
        <LightTitle>Add-ons</LightTitle>
        {hasAddButton && (
          <CustomIconButton
            label="Add Item"
            variant={"outlined"}
            icon={<AddIcon style={{ color: "#2B817B" }} />}
          />
        )}
      </FlexBoxContainer>
      <CustomPaper marginTop={3} marginBottom={3}>
        <LightTitle>No Add-ons added</LightTitle>
      </CustomPaper>
    </>
  );
};
export default TabsMealPlan;
