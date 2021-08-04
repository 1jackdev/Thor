import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.css";
import UserContext from "..//../hooks/UserContext";
const NavBar = ({ logout }) => {
  const { user } = useContext(UserContext);
  function Loggedin() {
    return (
      <Nav>
        <NavItem className="nav-item mr-4">
          <NavLink to="/profile">Profile</NavLink>
        </NavItem>
        <NavItem className="nav-item mr-4">
          <NavLink to="/" onClick={logout}>
            Log out for {user.username || user.firstName}
          </NavLink>
        </NavItem>
      </Nav>
    );
  }

  function LoggedOut() {
    return (
      <Nav>
        <NavItem className="nav-item mr-4">
          <NavLink to="/signup">Signup</NavLink>
        </NavItem>
      </Nav>
    );
  }

  return (
    <Navbar className="navbar-dark bg-primary navbar-expand-md">
      <div className="container-fluid">
        <NavLink exact to="/" className="navbar-brand">
          Home
        </NavLink>
        {user ? Loggedin() : LoggedOut()}
      </div>
    </Navbar>
  );
};

export default NavBar;
