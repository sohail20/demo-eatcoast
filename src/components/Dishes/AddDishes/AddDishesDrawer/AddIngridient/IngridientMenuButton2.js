import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import { Box, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CustomSearchBar from "./CustomSearchBar";
import Input from "@mui/material/Input";

export const IngridientMenuButton2 = () => {
  const Data = [
    {
      button: "Pcs",
    },
    {
      button: "%",
    },
    {
      button: "gr",
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [menuVal, setMenuVal] = React.useState("Pcs");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const PieceTypo = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "18px",
    color: "#2B817B",
    textTransform: "capitalize",
  }));

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="text"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            // padding:0,
            // minHeight: 0,
            // minWidth: 0,
          }}
        >
          <PieceTypo> {menuVal}</PieceTypo>
         
        </Button>
      {/* </Box> */}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {Data.map((item) => {
          return (
            <MenuItem
              onClick={(e) => {
                setMenuVal(item.button);
                handleClose();
              }}
            >
              {item.button}
            </MenuItem>
          );
        })}
      </Menu>
      </Box>

    </div>
  );
};
