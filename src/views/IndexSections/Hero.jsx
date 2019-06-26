


import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div id="home_page" className="position-relative">
          {/* Hero for FREE version */}
          <section  className="section section-lg section-hero section-shaped">
            {/* Background circles */}
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center">
                    <img alt="..." className="img-fluid" width = "250px" src={require("assets/img/brand/logochu.png")}/>
                    <h3 className="display-3 text-white my-md">We build application with our passion over 12 years</h3>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
