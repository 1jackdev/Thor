import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/home/Home";
import CardList from "../components/options/CardList";
import Place from "../components/places/Place";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/decide">
        <CardList title="Login" />
      </Route>
      <Route exact path="/places/:id">
        <Place title="Place Details" />
      </Route>

      {/* <Route exact path="/login">
        <Login title="Login" submitLogin={submitLogin} />
      </Route>
      <Route exact path="/signup">
        <Signup title="Signup" submitSignup={submitSignup} />
      </Route> */}
      {/* <ProtectedRoute exact path="/profile">
        <Profile title="Profile" />
      </ProtectedRoute> */}

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
