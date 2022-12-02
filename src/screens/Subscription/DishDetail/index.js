import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IngridientDetailsCard from '../IngridientDetailsCard';


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

const DishDetail = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const IngridientListItemDataArray = [
    {
      imgSrc:"images/tomatoPasteImg.svg",
      name:"Tomato Paste",
      qty:"2 Pcs"
    },
    {
      imgSrc:"images/oliveOilImg.svg",
      name:"Olive Oil",
      qty:"2 Pcs"
    },
    {
      imgSrc:"images/garlicImg.svg",
      name:"Garlic Clover",
      qty:"2 Pcs"
    },
  ]
  
  return (
    <>
        <Box sx={{width:"100%"}}>
          <Box width="100%" borderRadius="10px">
              <img src="images/detaildish.png" alt="detaildish" style={{width:"100%", height:"auto",borderRadius:"10px"}} />
          </Box>
          <Box px="5px" sx={{width:"100%"}}>
            <Typography sx={{py:"10px",fontWeight:"600",color:"#1A1824",fontSize:{xs:"18px",md:"24px"}}}>
              Kabasa
            </Typography>
            <Typography sx={{fontWeight:"400",color:"#545359",fontSize:{xs:"13px",md:"16px"}}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Typography>
          </Box>
        </Box>
        <Box sx={{width:"100%",mt:"15px"}}>
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
              label="Ingridient"
              {...a11yProps(0)}
              sx={{
                marginBottom: "-20px",
                fontFamily: "Outfit",
                fontSize: "14px",
                color: "#9EA3AE",
                lineHeight: "30px",
                fontWeight: "600",
                textTransform: "none"
              }}
            />
            <Tab
              disableRipple={true}
              label="Nutritional Info"
              {...a11yProps(1)}
              sx={{
                marginBottom: "-20px",
                fontFamily: "Outfit",
                fontSize: "14px",
                color: "#9EA3AE",
                lineHeight: "30px",
                fontWeight: "600",
                textTransform: "none"
              }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <IngridientDetailsCard IngridientListItemDataArr={IngridientListItemDataArray}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          no data
        </TabPanel>
    </>
  )
}

export default DishDetail