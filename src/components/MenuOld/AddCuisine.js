import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Select from "@mui/material/Select";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
// import IconButton from '@mui/material/IconButton';
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ImageSection from "../../components/Menu/ImageSection";
import ArabianCuisineMenu from "./CuisineMenu/ArabianCuisineMenu";
import CustomSelectMenu from "./CuisineMenu/CustomSelectMenu";
import MenuButton1 from "./AddCuisineMenuButtons/MenuButton1";
import MenuButton2 from "./AddCuisineMenuButtons/MenuButton2";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    width: "508px",
    height: "436px",
  },
  "& .MuiDialogActions-root": {
    // padding: theme.spacing(1),
    color: "#2B817B",
    borderColor: "#2B817B",
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <DialogTitle sx={{ m: 0, p: 0 }}>
            {onClose ? (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  // position: 'absolute',
                  position: "left",
                  right: 8,
                  top: 8,
                  color: "#E75C62",
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
        </Box>
        <Box>
          <DialogTitle sx={{ m: 0, p: 2, pt: 4 }} {...props}>
            {children}
          </DialogTitle>
        </Box>
      </Box>
    </>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AddCuisine({ setIsShownButtonBoxFunc }) {
  const TypoTitle = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 14),
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "32px",

    color: "#1A1824",
  }));

  const Typo1 = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 17),
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",

    // display: "flex",
    alignItems: "center",
    // textAlign: "center",

    color: "#1A1824",
    paddingBottom: "8px",
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [val, setVal] = React.useState("");

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const [open, setOpen] = React.useState(true);
  const [checkbox, setCheckbox] = React.useState(false);
  const [isShownCuisine, setIsShownCuisine] = useState(false);
  const [menuVal, setMenuVal] = React.useState("Arabian Cuisine");

  const handleClickCheckbox = () => {
    // setOpen(!open);
    setCheckbox(!checkbox);
  };

  const ItemStyle = {
    "& .Mui-Selected": {
      color: "green",
    },
  };

  const handleClickBtn = (event) => {
    setIsShownCuisine((current) => !current);
    handleClose();
    setIsShownButtonBoxFunc(true);
  };

  const handleCloseBtn = (event) => {
    // !setIsShownCuisine((current) => !current);
    handleClose();
    // setIsShownButtonBoxFunc(true);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openBox = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseBox = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <Dialog
          width="300px"
          // onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{
            color: "#E75C62",
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "500px", // Set your width here
                // height: "336px"
              },
            },
          }}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            // onClose={handleClose}
            sx={{ display: "flex" }}
          >
            <Box>
              <IconButton
                aria-label="close"
                onClick={handleCloseBtn}
                sx={{
                  // position: 'absolute',
                  position: "left",
                  right: 8,
                  top: 0,
                  color: "#E75C62",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                pl: {
                  xl: "120px",
                  lg: "120px",
                  md: "120px",
                  sm: "120px",
                  xs: "50px",
                },
              }}
            >
              {" "}
              <TypoTitle>Add Cuisine</TypoTitle>
            </Box>
          </BootstrapDialogTitle>

          <DialogContent>
            <Box>
              <Box>
                <Typo1 sx={{ fontSize: "20px", fontWeight: "500" }}>
                  Cuisine
                </Typo1>
              </Box>

              <MenuButton1 />
            </Box>

            <Box mt="16px">
              <Box>
                <Typo1 sx={{ fontSize: "20px", fontWeight: "500" }}>
                  Sub-cuisine <span>(Optional)</span>
                </Typo1>
              </Box>

              <MenuButton2 />
            </Box>

            <DialogActions sx={{ justifyContent: "center", mt: "32px" }}>
              <Button
                variant="outlined"
                onClick={handleClose}
                sx={{ borderColor: "#2B817B", color: "#2B817B" }}
              >
                Close
              </Button>

              <Button
                variant="contained"
                // onClick={handleClose}
                onClick={handleClickBtn}
                sx={{ backgroundColor: "#2B817B" }}
              >
                Save
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
      <Box
        sx={
          {
            // pt: "40px"
          }
        }
      >
        {isShownCuisine ? <ArabianCuisineMenu /> : <ImageSection />}
      </Box>
    </>
  );
}
