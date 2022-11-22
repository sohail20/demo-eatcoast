import React from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { InputLabel } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Select from "@mui/material/Select";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ArabianCuisineMenu from "./ArabianCuisineMenu";
import AllCuisineMenu from "./AllCuisineMenu";
import { Button, Menu, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// export default function CustomSelectMenu({setIsShownAllCuisine}) {
export default function CustomSelectMenu({}) {
  const [age, setAge] = React.useState("");
  const [isShownAllCuisine, setIsShownAllCuisine] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const ItemStyle = {
    "& .Mui-Selected": {
      color: "green",
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleVal = (e) => {
  //   setMenuVal(e.target.value)
  // }

  const [checkbox, setCheckbox] = React.useState(true);
  const [menuVal, setMenuVal] = React.useState("Arabian Cuisine");

  const handleClickCheckbox = () => {
    // setOpen(!open);
    setCheckbox(!checkbox);
  };

  const handleClickBtn = () => {
    setIsShownAllCuisine(true);
    handleClickCheckbox();
  };
  // const handleClickCheckbox2 = () => {
  //   // setOpen(!open);
  //   setCheckbox(!checkbox);
  //   setIsShownAllCuisine(false);
  // };
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
            fontSize: "16px",
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
              setIsShownAllCuisine(true);
              // handleClickCheckbox();
            }}
          >
            <ListItemText primary="All Cuisine" />
            {/* <ListItemIcon>
              {checkbox ? (
                ""
              ) : (
                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
              )}
            </ListItemIcon> */}
            {/* All Cuisine */}
          </MenuItem>
          <Divider variant="middle" orientation="horizontal" />
          <MenuItem
            sx={{
              color: "#1A1824",
              fontWeight: "600",
              pt: "0px",
              pb: "0px",
              fontSize: "14px",
            }}
            onClick={(e) => {
              setMenuVal("Arabian Cuisine");
              handleClose();
              handleClickCheckbox();
            }}
          >
            <ListItemText primary="Arabian Cuisine" />
            <ListItemIcon>
              {checkbox ? (
                ""
              ) : (
                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
              )}
            </ListItemIcon>

            {/* Arabian Cuisine */}
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
            }}
          >
            American Cuisine
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
            }}
          >
            Japanese Cuisine
          </MenuItem>
          <Divider variant="middle" orientation="horizontal" />
          <MenuItem
            sx={{ pt: "0px", pb: "0px", pr: "140px" }}
            onClick={(e) => {
              setMenuVal("Other");
              handleClose();
            }}
          >
            {/* Other */}
            {/* <ListItemText  sx={{ color: "#6A82CF", fontSize: "14px", fontWeight: "400"  }}>Other</ListItemText> */}
            <ListItemText
              primary="Other"
              sx={{ color: "#6A82CF", fontSize: "14px", fontWeight: "600" }}
            />
            <ListItemIcon>
              <AddIcon fontSize="small" sx={{ color: "#6A82CF" }} />
            </ListItemIcon>
          </MenuItem>
          {/* <MenuItem onClick={handleVal(e)}>My account</MenuItem>
        <MenuItem onClick={handleVal(e)}>Logout</MenuItem> */}
        </Menu>
      </Box>

      {isShownAllCuisine ? (
        <AllCuisineMenu />
      ) : (
        //  (<ArabianCuisineMenu/>)
        ""
      )}
    </Box>
  );
}

{
  /* <Box> */
}
{
  /* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: "#2B817B" }}>
          Select cuisine
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          onFocus
          // onClick={handleClick}
          // label={"Select cuisine"}
          className={ItemStyle}
          variant="outlined"
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            borderTop: "none",
            maxWidth: "170px",
            height: "50px",
            color: "#2B817B",
            pt: "20px",
          }}
          IconComponent={(props) => (
            <KeyboardArrowDownIcon {...props} sx={{ fill: "#2B817B" }} />
          )}
        >
          <MenuItem value={10} onClick={handleClickBtn}>
          <MenuItem value={10} onClick={handleClickCheckbox2}>
            <ListItemText>All Cuisine</ListItemText>
            <ListItemIcon>
              {checkbox ? (
                ""
              ) : (
                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
              )}
            </ListItemIcon>
          </MenuItem>

          <MenuItem value={20} onClick={handleClickCheckbox}>
            <ListItemText>Arabian Cuisine</ListItemText>
            <ListItemIcon>
              {checkbox ? (
                ""
              ) : (
                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
              )}
            </ListItemIcon>
          </MenuItem>

          <MenuItem value={30} onClick={handleClickCheckbox}>
            <ListItemText>American Cuisine</ListItemText>
            <ListItemIcon>
              {checkbox ? (
                ""
              ) : (
                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
              )}
            </ListItemIcon>
          </MenuItem>

          <MenuItem value={40} onClick={handleClickCheckbox}>
            <ListItemText>Japanese Cuisine</ListItemText>
            <ListItemIcon>
              {checkbox ? (
                ""
              ) : (
                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
              )}
            </ListItemIcon>
          </MenuItem>

          <MenuItem value={50} onClick={handleClickCheckbox}>
            <ListItemText>Other +</ListItemText>
            <ListItemIcon>
              {checkbox ? (
                ""
              ) : (
                <CheckCircleOutlineIcon sx={{ fill: "#42C677" }} />
              )}
            </ListItemIcon>
          </MenuItem>
        </Select>

      </FormControl> */
}
{
  /* </Box> */
}

// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//       border: "0px #fff",
//       outline: "0px"

//     },
//   },
// };

// const names = [
//   'All Cuisine',
//   'Arabian Cuisine',
//   'American Cuisine',
//   'Japanese Cuisine',
//   'Other +'
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function MultipleSelect() {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1,  }}>
//          <InputLabel id="demo-multiple-name-label" >Arabian Cuisine</InputLabel>
//         <Select
//           labelId="demo-multiple-name-label"
//           id="demo-multiple-name"
//           label="Arabian Cuisine"

//           onChange={handleChange}
//           MenuProps={MenuProps}
//           sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 },  }}
//         >
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
