import React, { useContext } from "react";
import SearchForm from "../search/SearchForm";
import UserContext from "../../hooks/UserContext";
import SignupModal from "../auth/Signup/SignupModal";
import LoginModal from "../auth/Login/LoginModal";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Home.css";

const Home = ({ submitSignup, submitLogin, logout }) => {
  const { user } = useContext(UserContext);
  const { searchData, setSearchData } = useContext(UserContext);

  function LoggedOut() {
    return (
      <div className="row">
        <SignupModal
          buttonLabel={"Open Modal"}
          className={"classname"}
          submitSignup={submitSignup}
        />
        <LoginModal
          buttonLabel={"Open Modal"}
          className={"classname"}
          submitLogin={submitLogin}
        />
      </div>
    );
  }

  function LoggedIn() {
    return (
      <div className="row">
        <Button variant="contained" color="secondary" className="logout" onClick={logout}>
          Log out
        </Button>
        <Button variant="contained" color="primary" className="btn-acct">
          <Link to="/profile">View Profile</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container">
      <main>
        <div className="container">
          {user ? LoggedIn() : LoggedOut()}
          <h2 className="title">
            <div className style={{ color: "#379CA9" }}>
              Cool With Whatever
            </div>
          </h2>
        </div>

        <h3 style={{ padding: "2rem" }}>Can't Decide? Let us pick for you!</h3>
        <SearchForm searchData={searchData} setSearchData={setSearchData} />
        {""}
      </main>
    </div>
  );
};

export default Home;
