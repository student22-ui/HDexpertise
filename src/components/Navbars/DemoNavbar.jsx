import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import AnchorLink from 'react-anchor-link-smooth-scroll'

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/logo.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <AnchorLink className="nav-link" href="#about_page">
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-inner--text">OUR STORIES</span>
                  </AnchorLink>

                  <AnchorLink className="nav-link" href="#help_page">
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-inner--text">WHAT WE CAN HELP</span>
                  </AnchorLink>

                  <AnchorLink className="nav-link" href="#help_page">
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-inner--text">GET BETTER WITH US</span>
                  </AnchorLink>

                  <AnchorLink className="nav-link" href="#contact_page">
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-inner--text">CONTACT US</span>
                  </AnchorLink>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
