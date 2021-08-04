import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import SignupForm from "./SignupForm";
import "./SignupModal.css";

const SignupModal = ({ submitSignup }) => {
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
        Signup
      </button>
      <Modal
        open={open}
        className="signup-modal"
        onClose={handleClose}
        aria-labelledby="signup-modal"
      >
        <SignupForm submitSignup={submitSignup} handleClose={handleClose} />
      </Modal>
    </div>
  );
};

export default SignupModal;
