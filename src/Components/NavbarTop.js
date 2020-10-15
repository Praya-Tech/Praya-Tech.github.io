import React, { useEffect, useState } from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import About from "./About";
import Home from "./Home";

const NavbarTop = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  const [route, setRoute] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("route")) {
      localStorage.setItem("route", "/");
    }
    const route = localStorage.getItem("route");
    setRoute(route);
  });

  const redirect = () => {
    return <Redirect to={route} />;
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log("/" + event.target.href.split("/")[3]);
    localStorage.setItem("route", "/" + event.target.href.split("/")[3]);
    setRoute("/" + event.target.href.split("/")[3]);
  };
  return (
    <Router>
      {redirect()}
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="PrayaTech"
              src="logo512.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mx-end">
              <Nav.Link href="/" address="/" onClick={handleClick}>
                <Link to="/" style={linkStyle}>
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link href="/#services">Services</Nav.Link>
              <Nav.Link href="/#projects" onClick={handleClick}>
                Projects
              </Nav.Link>
              <Nav.Link href="/#techstack" onClick={handleClick}>
                Tech Stack
              </Nav.Link>
              <Nav.Link href="/about" onClick={handleClick}>
                <Link to="/about" style={linkStyle}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="/#contact" onClick={handleClick}>
                <Link to="/#contact" style={linkStyle}>
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavbarTop;
