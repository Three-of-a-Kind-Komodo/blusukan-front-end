import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar fixedTop default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <h3>Blusukan.com</h3>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/about"
              to="/about"
            >
              About
            </NavItem>
            <NavItem
              eventKey={3}
              componentClass={Link}
              href="/landmarks"
              to="/landmarks"
            >
              Landmarks
            </NavItem>
            <NavItem
              eventKey={4}
              componentClass={Link}
              href="/culinary"
              to="/culinary"
            >
              Culinary
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/stay" to="/stay">
              Stay
            </NavItem>
            <NavItem
              eventKey={6}
              componentClass={Link}
              href="/contact"
              to="/contact"
            >
              Contact
            </NavItem>
            <NavItem
              eventKey={7}
              componentClass={Link}
              href="/add-content"
              to="/add-content"
            >
              Add Content
            </NavItem>
            <NavItem
              eventKey={8}
              componentClass={Link}
              href="/login"
              to="/login"
            >
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
