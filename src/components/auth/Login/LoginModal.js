import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
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
      <button type="button" onClick={handleOpen}>
        Login
      </button>
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
