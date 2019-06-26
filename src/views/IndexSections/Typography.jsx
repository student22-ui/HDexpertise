import React from "react";

// reactstrap components
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col
} from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
      <div id="help_page" className="position-relative">
        <h2>
          <span>WHAT WE HELP YOU ?</span>
        </h2>
        <section className="section">
            <Container>
              <Row>
                <Col className="mb-5 my-lg-sm" lg="6" md="4">
                  <Link to="/whatweone-page">
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/brand/myobLogo.png")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">We help you</span>
                            <small className="h6 text-muted">
                            We are a new Australian company dedicated to addressing overall waste management with new concepts for treaaaaasdasfwa egaegsdgdsadsf
                            </small>
                        </h5>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col className="mb-5 my-lg-sm" lg="6" md="4">
                  <Link to="/whatwetwo-page">
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/brand/bestsystems.png")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">We help you</span>
                          <small className="h6 text-muted">
                            Manager and understand our's inside with
                          </small>
                        </h5>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col className="mb-5 my-lg-sm" lg="6" md="4">
                <Link to="/whatwethree-page">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">UI/UX Designer</small>
                      </h5>
                    </div>
                  </div>
                  </Link>
                </Col>
                <Col className="mb-5 my-lg-sm" lg="6" md="4">
                  <Link to="/whatwefour-page">
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">We build</span>
                          <small className="h6 text-muted">A website for you </small>
                        </h5>
                      </div>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Typography;
