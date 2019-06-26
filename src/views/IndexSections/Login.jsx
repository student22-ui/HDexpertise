import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameuser: '',
      emailuser: '',
      messageuser: '',
      isSent:false
      }
  }
  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.nameuser);
    // console.log(this.state.emailuser);
    // console.log(this.state.messageuser);

    
    if(this.state.isSent){
      this.setState({isSent:false});
    }else{
        const url = '/api.php';
        fetch(url,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },body: JSON.stringify( {
            "name" : this.state.nameuser,
            "email" : this.state.emailuser,
            "message" : this.state.messageuser,
        }),
        })
        .then(res => res.text())
        .then(res => {
          if(res.error) {
              throw(res.error);
          }
          console.log(res);
          this.setState({isSent:true});
          return res;
        })
        .catch(error => {
          console.log(error);
        });  
    }
    
  };

  render() {
    return (
      <>
        <section id="contact_page" className="section section-lg section-shaped">
          <div className="shape shape-style-1 shape-default">
          </div>
          <Container className="py-md" style={!this.state.isSent ? {display: 'block'} : { display: 'none' }}>
            <Row className="row-grid justify-content-between align-items-center">
              <Col lg="6">
                <h3 className="display-3 text-white">
                  Contact Us
                </h3>
                <p className="lead text-white">
                  Please submit the form to contact us.
                </p>
              </Col>
              <Col className="mb-lg-auto" lg="5">
                <div>
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <Form role="form" 
                      onSubmit={this.handleSubmit}>
                        <FormGroup
                          className={classnames("mb-3", {
                            focused: this.state.name
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="nameuser"
                              onChange={this.handleInputChange}
                              placeholder="Name"
                              type="text"
                            />
                          </InputGroup>
                        </FormGroup>

                        <FormGroup
                          className={classnames("mb-3", {
                            focused: this.state.email
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="emailuser"
                              onChange={this.handleInputChange}
                              placeholder="Email"
                              type="email"
                            />
                          </InputGroup>
                        </FormGroup>

                        <FormGroup
                          className={classnames({
                            focused: this.state.message,
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-caps-small" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <textarea class="form-control" 
                            name="messageuser" 
                            onChange={this.handleInputChange}
                            rows="5" 
                            placeholder="Write your message ...">
                            </textarea>
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="Submit"
                            
                            onSubmit={this.handleSubmit}
                          >
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>


          <Container className="py-md" style={this.state.isSent ? {display: 'block'} : { display: 'none' }}>
            <Row className="row-grid justify-content-between align-items-center">
              <Col className="mb-lg-auto" lg="5">
                <div>
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <h3>Thank you for your message.</h3>

                      <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={this.handleSubmit}
                          >
                            Back
                          </Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
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
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}
export default Login;
