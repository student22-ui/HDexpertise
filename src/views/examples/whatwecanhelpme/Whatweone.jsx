import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";


class Whatweone extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>

      <main className="whatweone-page" ref="main">
        <DemoNavbar />
        <div className="position-relative">
          <section className="section section-lg section-shaped pb-100">
                <div className="shape shape-style-1 shape-default">
                <effect/>
                </div>
                <Container className="py-lg-md d-flex">
                  <div className="col px-0">
                    <Row>
                      <Col lg="6">
                        <h1 className="display-3 text-white">
                          What we can help me ?
                          <span>completed with examples</span>
                        </h1>
                        <p className="lead text-white">
                          The design system comes with four pre-built pages to
                          help you get started faster. You can change the text and
                          images and you're good to go.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew">
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
          <section className="section section-shaped">
            <Container className="py-md">
              <Row className="justify-content-center align-items-center">
                <Col className="mb-5 mb-lg-lg" lg="4">
                  <img
                      alt="..."
                      className="rounded img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/brand/myobLogo.png")}
                      style={{ width: "200px" }}
                          />
                </Col>
                <Col className="mb-lg-lg" lg="8">
                  <h1 className="text-primary font-weight-light">
                      Bootstrap carousel
                    </h1>
                    <p className="lead text-primary mt-4">
                      Argon Design System comes with four pre-built pages to help
                      you get started faster. You can change the text and images and
                      you're good to go.
                    </p>
                </Col>
              </Row>
              <Row className="justify-content-between align-items-center">
                <Col className="mb-5 mb-lg-lg" lg="4">
                  <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/brand/myobLogo.png")}
                      style={{ width: "200px" }}
                          />
                </Col>
                <Col className="mb-lg-lg" lg="8">
                  <h1 className="text-primary font-weight-light">
                      Bootstrap carousel
                    </h1>
                    <p className="lead text-primary mt-4">
                      Argon Design System comes with four pre-built pages to help
                      you get started faster. You can change the text and images and
                      you're good to go.
                    </p>
                </Col>
              </Row>
              <Row className="justify-content-between align-items-center">
                <Col className="mb-5 mb-lg-lg" lg="4">
                  <img
                      alt="..."
                      className="rounded img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/brand/myobLogo.png")}
                      style={{ width: "200px" }}
                          />
                </Col>
                <Col className="mb-lg-lg" lg="8">
                  <h1 className="text-primary font-weight-light">
                      Bootstrap carousel
                    </h1>
                    <p className="lead text-primary mt-4">
                      Argon Design System comes with four pre-built pages to help
                      you get started faster. You can change the text and images and
                      you're good to go.
                    </p>
                </Col>
              </Row>
            </Container>
          </section>
          
          {/* stories */}
          <section id="about_page" className="section-nucleo-icons">
          <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/landing-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/landing.jpg")}
                    />
                  </Link>
                </Card>
                <Row className="justify-content-center">
                  <Col className="text-center" lg="10">
                    <p className="lead text-center">
                      <p>We are a new Australian company dedicated to addressing overall waste management with new concepts for treaaaaasdasfwa egaegsdgdsadsf </p>
                    </p>
                  </Col>
                </Row>

              </Col>
              <Col className="mb-5 mb-lg-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/profile-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/profile.jpg")}
                    />
                  </Link>
                </Card>
                <Row className="justify-content-center">
                  <Col className="text-center" lg="10">
                    <p className="lead text-center">
                      <p>We are a new Australian company dedicated to addressing overall waste management with new concepts for treaaaaasdasfwa egaegsdgdsadsf </p>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col className="mb-5 mb-lg-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/profile-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/profile.jpg")}
                    />
                  </Link>
                </Card>
                <Row className="justify-content-center">
                  <Col className="text-center" lg="10">
                    <p className="lead text-center">
                      <p>We are a new Australian company dedicated to addressing overall waste management with new concepts for treaaaaasdasfwa egaegsdgdsadsf </p>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <CardsFooter />
        </div>
      </main>
      
      </>
    );
  }
}

export default Whatweone;
