import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Alert, Form, Input, Label } from "reactstrap";
import { FormControl, FormGroup, Button } from "@material-ui/core";
import "./LoginForm.css";

const LoginForm = ({ submitLogin, handleClose }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
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
    let result = await submitLogin(credentials);
    if (result.success) {
      handleClose();
      return <Redirect to="/" />;
    } else {
      setFormErrors(result.errors);
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="login-modal-card">
      <FormControl>
        <h4>Login to see your past selections.</h4>
        <FormGroup>
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
          Login
        </Button>
      </FormControl>
    </Form>
  );
};

export default LoginForm;
