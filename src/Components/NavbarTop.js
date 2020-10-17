import React, { useEffect, useState } from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarTop = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{
          width: "100.3%",
        }}
      >
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
            <Nav.Link href="/#home">Home</Nav.Link>
            <Nav.Link href="/#story">About</Nav.Link>
            <Nav.Link href="/#services">Services</Nav.Link>
            <Nav.Link href="/#projects">Projects</Nav.Link>
            <Nav.Link href="/#techstack">Tech Stack</Nav.Link>
            <Nav.Link href="/#team">Team</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarTop;
