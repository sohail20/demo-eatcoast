import * as React from "react";
import { useState } from "react";
import { Typography, Container, Box, Button, Link } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material";
import dish from "../Images/dish.png";
import menu from "../Images/menu.png";
import logo from '../Images/logo.png';
import rightarrow from '../Images/arrow-right.png';
import element from '../Images/element-4.png';
import box from '../Images/box.png';
import book from '../Images/book.png';
import receipt_discount from '../Images/receipt-discount.png';
import buttonSide from '../Images/Button-side.png';
import setting from '../Images/setting-2.png';
import "../style.css";
import AddPlanSection from "../AddPlanSection/AddPlanSection";
import AddMealPlan from "../../addMealPlan/AddMealPlan";

const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: "600",
  color: "#1A1824;",
}));

const Para = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: "400",
  color: "#1A1824;",
}));
const Btn = styled(Button)(({ theme }) => ({
  fontFamily: "Outfit",
  fontWeight: "600",
  textTransform: "capitalize",
}));

function HeadBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showAddMealPlan, setShowAddMealPaln] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenDrawer(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenDrawer(false);
  };
  return (
    <>
    {showAddMealPlan ? 
    <AddMealPlan setShowAddMealPaln={setShowAddMealPaln}/> :
      <Box
        sx={{
          height: "10vh",
          // borderBottom: '1px solid #E1E1E6',
          width: "95%",
        }}
      >
        <Box
          sx={{
            padding: "10px 0px 0px 30px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img src={require(`../Images/arrow-left.png`)} />
            <Para
              sx={{
                fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" },
                color: "#2B817B;",
                fontWeight: "600",
              }}
            >
              <Link href="#" sx={{ textDecoration: "none" }}>
                Cuisine
              </Link>
            </Para>
          </Box>
          <Heading
            sx={{
              fontSize: { lg: "20px", md: "20px", sm: "16px", xs: "16px" },
              margin: "0px auto 0px auto",
            }}
          >
            Meal Plan
          </Heading>
          
        </Box>
        <Box
          sx={{
            minHeight: "510px",
            borderRadius: "8px",
            border: "1px solid  #E1E1E6",
            width: "95%",
            margin: "20px auto 0px auto",
            padding: 5,
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            className="dishbox"
          >
            <Box
              sx={{
                marginLeft: { lg: 2, md: 2, sm: 0, xs: 0 },
                display: "inline-block",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img id="dish" src={dish} />
                <Box sx={{ marginLeft: { lg: 2, md: 2, sm: 0, xs: 0 } }}>
                  <Heading>Mesopotamian cuisine</Heading>

                  <Para
                    sx={{
                      width: { lg: "500px", md: "450px", sm: "100%" },
                      fontSize: "14px",
                      color: "#545359",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </Para>
                </Box>
              </Box>
            </Box>
            <Btn
            onClick={()=>setShowAddMealPaln(true)}
              sx={{
                backgroundColor: "#2B817B",
                borderRadius: "4px",
                color: "white",
                width: { lg: "147px", md: "147px", sm: "300px" },
                fontSize:{lg:'16px',md:'16px',sm:'14px',xs:"14px"},
                height: "40px",
                marginTop:{lg:'0px',md:'0px',sm:'10px',xs:'10px'},
                "&:hover":{backgroundColor:'#2B817B'}
              }}
            >
              Add Meal Plan
            </Btn>
          </Box>

          <AddPlanSection/>
          
        </Box>
      </Box>
     }
    </>
  );
}

export default HeadBar;
