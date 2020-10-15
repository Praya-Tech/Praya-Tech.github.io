import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Link as scrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import About from "./About";
import Home from "./Home";

const NavbarTop = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <Router>
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
              <Nav.Link href="/">
                <Link to="/" style={linkStyle}>
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link href="/#services">Services</Nav.Link>
              <Nav.Link href="/#projects">Projects</Nav.Link>
              <Nav.Link href="/#techstack">Tech Stack</Nav.Link>
              <Nav.Link href="/#/about">
                <Link to="/#/about" style={linkStyle}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="/#/contact">
                <Link to="/#/contact" style={linkStyle}>
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
