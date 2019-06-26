/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          
          <Container>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  <a
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  > 
                  </a>
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                  <AnchorLink href="#home_page">
                    <NavLink>
                      Home
                    </NavLink>
                    </AnchorLink>
                  </NavItem>
                  <NavItem>
                  <AnchorLink href="#about_page">
                    <NavLink>
                      About
                    </NavLink>
                    </AnchorLink>
                  </NavItem>
                  <NavItem>
                  <AnchorLink href="#help_page">
                    <NavLink>
                      Help
                    </NavLink>
                    </AnchorLink>
                  </NavItem>
                  <NavItem>
                  <AnchorLink href='#contact_page'>
                    <NavLink>
                      Contact Us
                    </NavLink>
                    </AnchorLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
