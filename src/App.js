import jwt from "jsonwebtoken";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import UserContext from "./hooks/UserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import useGeolocation from "./hooks/useGeolocation";
import BackendApi from "./api/api";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#29b6f6",
        dark: "#0f49ad"
      },
      secondary: {
        main: "#D93A8A",
      },
      success: {
        main: "#388e3c",
      },
      info: {
        main: "#f5b342",
      },
    },
  });

  const INITIAL_STATE = {
    type: "",
    distance: 0.25,
    location: "",
    coordinates: { lat: null, lng: null },
  };
  const [searchData, setSearchData] = useState(INITIAL_STATE);
  const [token, setToken] = useLocalStorage(null);
  const geo = useGeolocation() || null;
  const [user, setUser] = useState(null);
  const [searchErrors, setSearchErrors] = useState([]);

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
      <ThemeProvider theme={darkTheme}>
        <UserContext.Provider
          value={{ user, setUser, searchData, setSearchData, geo }}
        >
          <div>
            <Routes
              submitLogin={submitLogin}
              submitSignup={submitSignup}
              logout={logout}
              searchErrors={searchErrors}
              setSearchErrors={setSearchErrors}
            />
          </div>
        </UserContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
