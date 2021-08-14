import React, { useState, useRef } from "react";
import { Modal, Button } from "@material-ui/core";
import SignupForm from "./SignupForm";
import "./SignupModal.css";

const SignupModal = ({ submitSignup }) => {
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
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        Signup
      </Button>
      <Modal
        open={open}
        className="signup-modal"
        onClose={handleClose}
        aria-labelledby="signup-modal"
        container={() => rootRef.current}
      >
        <div ref={rootRef}>
          <SignupForm submitSignup={submitSignup} handleClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
};

export default SignupModal;
