import React, { useState } from "react";
import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function CustomDropdown({ value, items = [], handleOnChange }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box component={"div"}>
        <span
          style={{
            fontFamily: "Outfit",
            fontSize: "14px",
            color: "#9EA3AE",
            lineHeight: "30px",
            fontWeight: "400",
          }}
        >
          Showing:{" "}
        </span>

        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon sx={{ fill: "#2B817B " }} />}
          sx={{
            color: "#545359",
            marginLeft: "10px",
            textTransform: "capitalize",
            border: "1px solid #E1E1E6",
            width: "76px",
            borderRadius: "6px",
            fontSize: {
              xl: "14px",
              lg: "14px",
              md: "13px",
              sm: "12px",
              xs: "12px",
            },
            fontWeight: "500",
            pl: "0px",
            width: "100px",
          }}
        >
          {value}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          onClose={handleClose}
          open={open}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            border: "1px solid #E1E1E6",
            borderRadius: "6px",
          }}
        >
          {items.map((item) => (
            <MenuItem
              sx={{
                color: "#9EA3AE",
                width: "120px",
                pt: "0px",
                pb: "0px",
                fontSize: "12px",
                fontWeight: "400",
              }}
              onClick={(e) => {
                handleOnChange(item.value);
                handleClose();
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontFamily: "outfit",
                  fontWeight: true ? "600" : "400",
                }}
              />

              <ListItemIcon>
                {item.value === value ? (
                  <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
                ) : (
                  ""
                )}
              </ListItemIcon>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </div>
  );
}

export default CustomDropdown;
