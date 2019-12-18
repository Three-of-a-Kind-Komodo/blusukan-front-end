import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
import { clientAuth } from "../../helpers/auth";

import "./navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: null
    };
  }
  logout = () => {
    clientAuth.logout(() => {
      this.props.history.push("/");
    });
    localStorage.removeItem("token");
  };

  render() {
    console.log(this.state.isAuthenticated);
    this.state.isAuthenticated = localStorage.getItem("isAuthenticated");
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

            {this.state.isAuthenticated ? (
              <>
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
                  onClick={this.logout}
                  // componentClass={Link}
                  // href="/login"
                  // to="/login"
                >
                  logout
                </NavItem>
              </>
            ) : (
              <NavItem
                eventKey={8}
                componentClass={Link}
                href="/login"
                to="/login"
              >
                Login
              </NavItem>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Navigation);
