import "./AlertDialog.css";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useContext } from "react";
import BackendApi from "../../api/api";
import UserContext from "../../hooks/UserContext";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const AlertDialog = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  async function removeSelections() {
    if (user) {
      try {
        await BackendApi.deleteSelections(user.username);
        setOpen(false);
        alert("Selections removed.");
        history.push("/");
      } catch (e) {
        console.error(e);
      }
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Remove Selections
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <b>This will remove all of your past selections.</b>
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
          <Button
            onClick={removeSelections}
            color="secondary"
            variant="contained"
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
