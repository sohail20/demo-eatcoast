import * as React from "react";
import PropTypes from "prop-types";
import { styled, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  ".MuiPaper-root": {
    width: "100%",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "100%",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedModal({ isOpened, children }) {
  const [open, setOpen] = React.useState(isOpened);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{ width: "100%" }}
      >
        <DialogContent dividers>
          <Box gutterBottom>{children}</Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
