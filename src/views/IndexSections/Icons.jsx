
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { 
  Button, 
  Container, 
  Row, 
  Col, 
  Card,
  Badge,
  CardBody,
  CardImg,
 } from "reactstrap";

class Icons extends React.Component {
  render() {
    return (
      <>
        <div id="about_page" className="position-relative">
          <h2>
            <span>STORY</span>
          </h2>  
          <section id="about_page" className="section section-lg section-nucleo-icons">
            <Container className="container-lg">
              <Row>
                <Col className="mb-5 mb-md-0 mx-1">
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
                        <p>We are a new Australian company dedicated to addressing overall waste management with new concepts for. </p>
                      </p>
                    </Col>
                  </Row>

                </Col>
                <Col className="mb-5 mb-lg-0 " md="4">
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
                <Col className="mb-5 mb-lg-0 " md="4">
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
        </div>
      </>
    );
  }
}

export default Icons;
