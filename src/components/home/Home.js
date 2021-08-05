import React, { useContext } from "react";
import SearchForm from "../search/SearchForm";
import UserContext from "../../hooks/UserContext";
import SignupModal from "../auth/Signup/SignupModal";
import LoginModal from "../auth/Login/LoginModal";
import { Link } from "react-router-dom";
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
      <div className="text-center">
        <h3>Welcome Back, {user.username || user.firstName}!</h3>
        <div className="row">
          <div className="btn-logout" onClick={logout}>
            Log out for {user.username || user.firstName}
          </div>
          <div className="btn-acct">
            <Link to="/profile">View Profile</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <main>
        <div className="container">
          <h2 className="title">
            <div style={{ color: "#FF5E5B" }}>Cool With Whatever</div>
          </h2>
          {user ? LoggedIn() : LoggedOut()}
        </div>

        <h3 style={{ padding: "2rem" }}>Can't Decide? Let us pick for you!</h3>
        <SearchForm searchData={searchData} setSearchData={setSearchData} />
        {""}
      </main>
    </div>
  );
};

export default Home;
