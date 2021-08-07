import React, { useState } from "react";
import { Modal, Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import "./LoginModal.css";

const LoginModal = ({ submitLogin }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        open={open}
        className="login-modal"
        onClose={handleClose}
        aria-labelledby="login-modal"
      >
        <LoginForm submitLogin={submitLogin} handleClose={handleClose} />
      </Modal>
    </div>
  );
};

export default LoginModal;
