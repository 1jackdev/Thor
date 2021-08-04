import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/home/Home";
import CardList from "../components/options/CardList";
import Place from "../components/places/Place";

function Routes({ submitSignup, submitLogin, logout }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home
          submitSignup={submitSignup}
          submitLogin={submitLogin}
          logout={logout}
        />
      </Route>
      <Route exact path="/decide">
        <CardList title="Login" />
      </Route>
      <Route exact path="/places/:id">
        <Place title="Place Details" />
      </Route>
      {/* <ProtectedRoute exact path="/profile">
        <Profile title="Profile" />
      </ProtectedRoute> */}

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
