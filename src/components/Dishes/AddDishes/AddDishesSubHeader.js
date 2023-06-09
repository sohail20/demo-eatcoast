import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import DeleteItemDialog from "./DeleteItemDialog/DeleteItemDialog";
import { AllDishesContext } from "../Context";
import { useContext } from "react";


const Heading1 = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  fontFamily: "outfit",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  color: "#2B817B",
  textTransform: "capitalize",
}));

const Typo1 = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  fontFamily: "outfit",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "28px",
  textTransform: "capitalize",
}));

const Button1 = styled(Button)(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  fontFamily: "outfit",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  textTransform: "capitalize",
  border: "1px solid #80B3B0",
  height: "40px",
  [theme.breakpoints.down("sm")]: {
    width: "90px",
    fontSize: "9px",
  },
}));

const Button2 = styled(Button)(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  fontFamily: "outfit",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  textTransform: "capitalize",
  border: "1px solid #80B3B0",
  height: "40px",
}));

const Button3 = styled(Button)(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  fontFamily: "outfit",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  textTransform: "capitalize",
  height: "40px",
  backgroundColor: "#D5E6E5",
  color: "#ffffff",
  [theme.breakpoints.down("sm")]: {
    width: "90px",
    fontSize: "9px",
  },
}));

export default function AddDishesSubHeader({ disabled, handleAddToDraft, setOpenBackToDish }) {

  const { setOpenEditDish } = useContext(AllDishesContext)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{ width: { lg: "50%", md: "50%", sm: "20%", xs: "0%" } }}
        >
          <IconButton onClick={() => setOpenEditDish(false)}>
            <Box>
              <CloseIcon sx={{ fill: "#E75C62" }} />
            </Box>
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: { xl: "60%", lg: "60%", md: "60%", sm: "60%", xs: "100%" },
            justifyContent: "space-between",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "row",
              xs: "column",
            },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typo1 variant="body1" color="initial">
              Add Dishes
            </Typo1>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: {
                xl: "0px",
                lg: "0px",
                md: "0px",
                sm: "0px",
                xs: "50px",
              },
              marginLeft: { xs: "40px" },
              marginBottom: { xs: "20px" },
            }}
          >
            <Box>
              <Button1
                variant="outlined"
                height="40px"
                sx={{ color: "#80B3B0" }}
                onClick={handleAddToDraft}
              >
                Save as Draft
              </Button1>
            </Box>
            <Box ml="12px">
              <Button2 variant="outlined" onClick={handleClickOpen}>
                <img
                  src="./images/trash.svg"
                  alt=""
                  width="24px"
                  height="24px"
                />
              </Button2>
            </Box>
            <Box ml="12px">
              <Button3
                variant="contained"
                type="submit"
                disabled={disabled}
                sx={{
                  backgroundColor:
                    disabled == "disabled" ? "#D5E6E5;" : "#2B817B",
                }}
              >
                Submit
              </Button3>
            </Box>
          </Box>
        </Box>
      </Box>

      {open ? <DeleteItemDialog open={open} handleClose={handleClose} /> : ""}
    </>
  );
}
