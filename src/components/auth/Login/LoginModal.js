import React, { useState, useRef } from "react";
import { Modal, Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import "./LoginModal.css";

const LoginModal = ({ submitLogin }) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

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
        container={() => rootRef.current}
      >
        <div ref={rootRef}>
          <LoginForm submitLogin={submitLogin} handleClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
