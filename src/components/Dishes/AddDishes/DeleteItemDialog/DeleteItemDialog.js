import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";

export default function DeleteItemDialog({ open, handleClose }) {

  
  const Typo1 = styled(Typography)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#545359",
    // width: "360px",
    textAlign: "center",
    alignItems: "center",
    paddingLeft: "50px",
    paddingRight: "50px",
    [theme.breakpoints.down('sm')]:{
      fontSize: "12 px",
  }

  }));

  const Button1 = styled(Button)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#E75C62",
    border: "1px solid #E75C62",
    width: "147px",
    textTransform: "capitalize",
    padding: "8px 24px",
    [theme.breakpoints.down('sm')]:{
      width: "90px",
      fontSize: "9px",
  },
  ":hover": {
    border: "1px solid #E75C62",
 }


  }));

  const Button2 = styled(Button)(({ theme }) => ({
    fontFamily: "Outfit",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#FFFFFF",
    backgroundColor: "#2B817B",
    width: "147px",
    textTransform: "capitalize",
    height: "40px",
    padding: "8px, 24px, 8px, 24px",

    [theme.breakpoints.down('sm')]:{
      width: "90px",
      fontSize: "9px",
  },
  ":hover": {
    backgroundColor: "#2B817B"
 }

  }));

  return (
    <div>
    
      <Dialog
        open={open}
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{"& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "509px",
            maxWidth: "509px",  // Set your width here
            // height: "205px",
          },
        },}}
      >
        <DialogTitle id="alert-dialog-title" sx={{ display: "flex",  }} 
        >
          <Box width="70%">
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon  sx={{ color: "#E75C62" }} />
            </IconButton>
          </Box>
          <Box width="100%">
            <Typography variant="body1" color="initial" sx={{fontSize: "20px", fontWeight: "600", lineHeight: "32px", paddingBottom: "16px" }}>
              Delete Item
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Typo1 pb="16px">something you delete can not be returned again, save this as a draft ?</Typo1>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{alignItems: "center", justifyContent: "center",  marginBottom: "32px"}}>
          <Box>
          <Button1 variant="outlined" onClick={handleClose}>Delete</Button1>
          
          </Box>
          <Box>
          <Button2 variant="contained" onClick={handleClose} autoFocus sx={{ ml:"24px"}}>
            Save as Draft
          </Button2>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}
