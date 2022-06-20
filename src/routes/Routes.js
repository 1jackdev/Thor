import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/home/Home";
import CardList from "../components/options/CardList";
import Place from "../components/places/Place";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../components/profile/Profile";

function Routes({
  submitSignup,
  submitLogin,
  logout,
  searchErrors,
  setSearchErrors,
}) {
  return (
    <Switch>
      <Route exact path="/">
        <Home
          submitSignup={submitSignup}
          submitLogin={submitLogin}
          logout={logout}
          searchErrors={searchErrors}
          setSearchErrors={setSearchErrors}
        />
      </Route>
      <Route exact path="/decide">
        <CardList title="Login" setSearchErrors={setSearchErrors} />
      </Route>
      <Route exact path="/places/:id">
        <Place title="Place Details" />
      </Route>
      <ProtectedRoute exact path="/profile">
        <Profile title="Profile" />
      </ProtectedRoute>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
