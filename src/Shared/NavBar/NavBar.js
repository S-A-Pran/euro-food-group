import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavHashLink } from "react-router-hash-link";
import "./NavBar.css";

const NavBar = () => {
  return (
    // used bootstrap navbar
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      className="shadow-lg"
      bg="dark"
      variant="dark"
    >
      <Container className="text-center">
        <Navbar.Brand as={NavHashLink} to="/home#home" href="#home">
          <img
            src="https://www.eurofoods-bd.com/images/logo.png"
            width="100"
            height="30"
            className="d-inline-block align-top bg-light shadow-lg p-1 rounded-pill px-3"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-light active" as={NavHashLink} to="/#home">
              Home
            </Nav.Link>
            <Nav.Link
              className="text-light active"
              as={NavHashLink}
              to="/about#about"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="text-light active"
              as={NavHashLink}
              to="/services#services"
              href="#services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className="text-light active"
              as={NavHashLink}
              to="/career#career"
            >
              Career
            </Nav.Link>
            <Nav.Link
              className="text-light active"
              as={NavHashLink}
              to="/contacts#contacts"
            >
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
