import jwt from "jsonwebtoken";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./hooks/UserContext";
import Routes from "./routes/Routes";
import useLocalStorage from "./hooks/LocalStorage";
import BackendApi from "./api/api";

function App() {
  const INITIAL_STATE = {
    type: "restaurant",
    distance: "0.25",
    location: "seattle, wa",
  };
  const [searchData, setSearchData] = useState(INITIAL_STATE);
  const [token, setToken] = useLocalStorage(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          let { subject } = jwt.decode(token);
          BackendApi.token = token;
          let user = await BackendApi.GetUser(subject);
          setUser(user);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setUser(null);
        }
      }
    }
    getCurrentUser();
  }, [token]);

  async function submitLogin(credentials) {
    try {
      let token = await BackendApi.LoginUser(credentials);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  async function submitSignup(credentials) {
    try {
      let token = await BackendApi.RegisterUser(credentials);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  function logout() {
    setUser(null);
    setToken(null);
  }

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ user, setUser, searchData, setSearchData }}
      >
        <div className="App">
          <Routes
            submitLogin={submitLogin}
            submitSignup={submitSignup}
            logout={logout}
          />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
