import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, Menu, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

export default function CustomSelectMenu({ setShowAllCuisineFunc }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [checkbox, setCheckbox] = React.useState(false);
  const [checkbox2, setCheckbox2] = React.useState(false);
  const [checkbox3, setCheckbox3] = React.useState(false);
  const [checkbox4, setCheckbox4] = React.useState(false);

  const [menuVal, setMenuVal] = React.useState("Arabian Cuisine");

  const handleIcon = () => {
    setCheckbox(true);
    setCheckbox2(false);
    setCheckbox3(false);
    setCheckbox4(false);
  }
  const handleIcon2 = () => {
    setCheckbox(false);
    setCheckbox2(true);
    setCheckbox3(false);
    setCheckbox4(false);
  }
  const handleIcon3 = () => {
    setCheckbox(false);
    setCheckbox2(false);
    setCheckbox3(true);
    setCheckbox4(false);
  }
  const handleIcon4 = () => {
    setCheckbox(false);
    setCheckbox2(false);
    setCheckbox3(false);
    setCheckbox4(true);
  }

  return (
    <Box sx={{ minWidth: "200px" }}>
      <Box pt="8px" pb="40px">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            color: "#2B817B",
            textTransform: "capitalize",
            fontSize: {
              xl: "26px",
              lg: "16px",
              md: "16px",
              sm: "16px",
              xs: "16px",
            },
            fontWeight: "400",
            pl: "0px",
          }}
        >
          {menuVal}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          // elevation={0}
          sx={{
            border: "1px solid #E1E1E6",
            borderRadius: "6px",
          }}
        >
          <MenuItem
            sx={{
              color: "#9EA3AE",
              width: "238px",
              pt: "0px",
              pb: "0px",
              fontSize: "14px",
              fontWeight: "400",
              
            }}
            onClick={(e) => {
              setMenuVal("All Cuisine");
              handleClose();
              handleIcon();
              setShowAllCuisineFunc((current) => !current);
            }}
          >
            <ListItemText primary="All Cuisine" sx={{color:checkbox?'#1A1824':"#9EA3AE"}}
            primaryTypographyProps={{fontSize: '14px', fontFamily: "outfit", fontWeight: checkbox? '600': '400',}}
            />
            <ListItemIcon>
              {checkbox ? (
                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
              ) : (
                ""
              )}
            </ListItemIcon>
          </MenuItem>
          <Divider variant="middle" orientation="horizontal" />
          <MenuItem
            sx={{
              color: "#1A1824",
              // fontWeight: "600",
              pt: "0px",
              pb: "0px",
              fontSize: "14px",
            }}
            onClick={(e) => {
              setMenuVal("Arabian Cuisine");
              handleClose();
              handleIcon2();
            }}
          >
            <ListItemText primary="Arabian Cuisine" sx={{color:checkbox2?'#1A1824':"#9EA3AE", fontWeight: checkbox? "600": "400"}}
            primaryTypographyProps={{fontSize: '14px', fontFamily: "outfit", fontWeight: checkbox2? '600': '400',}}
             />
            <ListItemIcon>
              {checkbox2 ? (
                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
              ) : (
                ""
              )}
            </ListItemIcon>
          </MenuItem>
          <Divider variant="middle" orientation="horizontal" />
          <MenuItem
            sx={{
              color: "#9EA3AE",
              pt: "0px",
              pb: "0px",
              fontSize: "14px",
              fontWeight: "400",
            }}
            onClick={(e) => {
              setMenuVal("American Cuisine");
              handleClose();
              handleIcon3();
            }}
          >
            <ListItemText primary="American Cuisine" sx={{color:checkbox3?'#1A1824':"#9EA3AE"}}
            primaryTypographyProps={{fontSize: '14px', fontFamily: "outfit", fontWeight: checkbox3? '600': '400',}}
            />
            <ListItemIcon>
              {checkbox3 ? (
                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
              ) : (
                ""
              )}
            </ListItemIcon>
          </MenuItem>
          <Divider variant="middle" orientation="horizontal" />
          <MenuItem
            sx={{
              color: "#9EA3AE",
              pt: "0px",
              pb: "0px",
              fontSize: "14px",
              fontWeight: "400",
            }}
            onClick={(e) => {
              setMenuVal("Japanese Cuisine");
              handleClose();
              handleIcon4();
            }}
          >
            <ListItemText primary="Japanese Cuisine" sx={{color:checkbox4?'#1A1824':"#9EA3AE"}}
            primaryTypographyProps={{fontSize: '14px', fontFamily: "outfit", fontWeight: checkbox4? '600': '400',}}
            />
            <ListItemIcon>
              {checkbox4 ? (
                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
              ) : (
                ""
              )}
            </ListItemIcon>
          </MenuItem>
          <Divider variant="middle" orientation="horizontal" />
          <MenuItem
            sx={{ pt: "0px", pb: "0px", pr: "140px" }}
            onClick={(e) => {
              setMenuVal("Other");
              handleClose();
            }}
          >
            <ListItemText
              primary="Other"
              sx={{ color: "#6A82CF", fontSize: "14px", fontWeight: "600" }}
              primaryTypographyProps={{fontSize: '14px', fontFamily: "outfit", fontWeight: '400',}}
            />
            <ListItemIcon>
              <AddIcon sx={{ color: "#6A82CF" ,  width:"16px", height:"16px"}}   />
            </ListItemIcon>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}
