import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Alert, Form, Input, Label } from "reactstrap";
import { FormControl, FormGroup, Button } from "@material-ui/core";
import "./SignupForm.css";

const SignupForm = ({ submitSignup, handleClose }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
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
          <Label className="label" htmlFor="last-name">
            Last Name
          </Label>
          <Input
            id="last-name"
            name="lastName"
            type="text"
            variant="outlined"
            placeholder="Smith"
            value={credentials.lastName}
            onChange={handleChange}
            required
          />
          <Label className="label" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            variant="outlined"
            placeholder="billygateslol@gmail.com"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <Label className="label" htmlFor="username">
            Username
          </Label>
          <Input
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
            id="password"
            name="password"
            type="password"
            variant="outlined"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        {formErrors.length ? <Alert color="danger">{formErrors}</Alert> : null}
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
