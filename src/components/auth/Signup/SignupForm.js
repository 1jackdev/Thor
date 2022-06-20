import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Alert, Form, Input, Label } from "reactstrap";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import "./SignupForm.css";

const SignupForm = ({ submitSignup, handleClose }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    firstName: "",
  });

  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let result = await submitSignup(credentials);
    if (result.success) {
      handleClose();
      return <Redirect to="/" />;
    } else {
      setFormErrors(result.errors);
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="signup-modal-card">
      <FormControl>
        <h4>Enter your information below to register.</h4>
        <FormGroup>
          <Label className="label" htmlFor="first-name">
            First Name
          </Label>
          <Input
            className="signup-field"
            id="first-name"
            name="firstName"
            type="text"
            variant="outlined"
            placeholder="John"
            value={credentials.firstName}
            onChange={handleChange}
            required
            bsSize="lg"
          />
          <Label className="label" htmlFor="username">
            Username
          </Label>
          <Input
            className="signup-field"
            id="username"
            name="username"
            type="username"
            variant="outlined"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <Label className="label" htmlFor="password">
            Password
          </Label>
          <Input
            className="signup-field"
            id="password"
            name="password"
            type="password"
            variant="outlined"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        {formErrors.length ? <Alert>{formErrors}</Alert> : null}
        <Button
          style={{ margin: "2rem" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Register
        </Button>
      </FormControl>
    </Form>
  );
};

export default SignupForm;
