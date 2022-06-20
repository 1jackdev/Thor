import React, { useContext } from "react";

import SearchForm from "../search/SearchForm";
import UserContext from "../../hooks/UserContext";
import SignupModal from "../auth/Signup/SignupModal";
import LoginModal from "../auth/Login/LoginModal";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import "./Home.css";

const Home = ({
  submitSignup,
  submitLogin,
  logout,
  searchErrors,
  setSearchErrors,
}) => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  function toProfile() {
    history.push("/profile");
  }

  function LoggedOut() {
    return (
      <div className="row">
        <SignupModal buttonLabel={"Open Modal"} submitSignup={submitSignup} />
        <LoginModal buttonLabel={"Open Modal"} submitLogin={submitLogin} />
      </div>
    );
  }

  function LoggedIn() {
    return (
      <div className="row">
        <Button
          className="logged-in-btn"
          variant="contained"
          color="primary"
          onClick={logout}
        >
          Log out
        </Button>
        <Button
          className="logged-in-btn"
          variant="contained"
          color="secondary"
          onClick={toProfile}
        >
          Profile
        </Button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="top-btns">
        {user ? LoggedIn() : LoggedOut()}
        <h1 className="home-title" color="primary">
          Try It Out
        </h1>
      </div>

      {searchErrors.length ? (
        <Alert severity="warning">{searchErrors}</Alert>
      ) : null}

      <h3 style={{ color: "white" }}>
        Can't decide where to go?
        <br />
        <br />
        Let us pick for you!
      </h3>
      <SearchForm setSearchErrors={setSearchErrors} />
      {""}
    </div>
  );
};

export default Home;
