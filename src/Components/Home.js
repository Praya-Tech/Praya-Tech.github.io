import React from "react";
import Particles from "react-particles-js";
import "../App.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import { iconList } from "./techStackIcons";
import "./home.css";
import { Form, Col, Row } from "react-bootstrap";
import Footer from "./Footer";
import { Instagram, Linkedin, Mail } from "react-feather";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const Home = () => {
  const navHeight = 54;
  var n = window.screen.width > 420 ? 350 : 400;
  var h1 = window.screen.width > 420 ? "400%" : "600%";
  return (
    <div>
      <Particles
        style={{ position: "absolute", zIndex: "-1" }}
        height={h1}
        width="100%"
        params={{
          particles: {
            color: {
              value: "#b1b1b1",
            },
            line_linked: {
              color: {
                value: "#818181",
              },
            },
            number: {
              value: n,
            },
            size: {
              value: 5,
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <section
        style={{ height: "90vh", display: "flex", alignItems: "center" }}
      >
        <div className="landing__container">
          <img src="PRAYA_1024.png" alt="P" className="landing__logo" />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
              marginLeft: "1rem",
            }}
          >
            <div className="text-dark landing__title">PRAYA TECH</div>
            <div className="landing__subtitle text-dark text-center">
              Helping bussiness to scale in the Digital World.
            </div>
          </div>
        </div>
      </section>

      <section
        className=""
        style={{ backgroundColor: "#2C3335" }}
        id="services"
      >
        <Container fluid>
          <h1 className="text-center text-light p-4 ">Services</h1>
          <div>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Web Development</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Mobile Development</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>e Commerce</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
          <div className="pt-4 pb-5">
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>IT Consulting</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>SEO</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>UX/UI Design</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
        </Container>
      </section>

      <section id="projects" className="pt-3">
        <Container fluid>
          <h1 className="text-center text-dark p-4">Projects</h1>
          <div>
            <CardDeck>
              <Card bg="dark">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  height="320px"
                />
                <Card.Body className="text-light">
                  <Card.Title>College Placement ERP</Card.Title>
                  <Card.Text>
                    This system enables students register to various placement
                    drives that placement department provides. Placement officer
                    can register companies and create drives and students can
                    register according to their eligibility. <br />
                    Tech-stack used: MERN stack (with MySQL).
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary m-2"
                    href="https://jjs-erp-test.herokuapp.com/"
                    target="_blank"
                  >
                    View
                  </Button>
                  <Button variant="primary m-2" href="#contact">
                    Request Demo
                  </Button>
                </Card.Footer>
              </Card>

              <Card bg="dark">
                <Card.Img
                  height="320px"
                  variant="top"
                  src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                <Card.Body className="text-light">
                  <Card.Title>Tshirt Store</Card.Title>
                  <Card.Text>
                    It allows users to Sign up and view Tshirts and Add to cart
                    and buy using secure Payment gateway. Created using MERN
                    Stack with an Payemnt Gateway. It includes Admin Panel and
                    User Panel.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    href="https://vishak-tshirt-store.herokuapp.com/"
                    target="_blank"
                    variant="primary m-2"
                  >
                    View Demo
                  </Button>
                </Card.Footer>
              </Card>
              <Card bg="dark">
                <Card.Img
                  height="320px"
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2015/10/31/12/00/financial-equalization-1015305_960_720.jpg"
                />
                <Card.Body className="text-light">
                  <Card.Title>Algorithm Visualizer</Card.Title>
                  <Card.Text>
                    This Web-app helps a newbie programmer to visualize Sorting
                    Algorithms. This Web-app is developed using ReactJS library.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    href="https://al-viz.netlify.app/"
                    target="_blank"
                    variant="primary m-2"
                  >
                    View Demo
                  </Button>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
        </Container>
      </section>

      <section id="techstack" className="pt-1">
        <Container className="pb-4">
          <h1 className="text-center text-dark p-4">TechStack</h1>
          <img
            src="ts.png"
            alt="Tech Stack"
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
            }}
          />
        </Container>
      </section>

      <section className="bg-dark" id="#contact">
        <Container className=" pb-4">
          <h1 className="text-center text-light p-4 ">Contact Us </h1>
          <Row>
            <Col sm="12" xs="12" lg="8" md="8">
              <Form
                action="https://formspree.io/f/mleojaea"
                method="POST"
                className="text-light"
              >
                <Row>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>First Name*</Form.Label>
                      <Form.Control
                        type="text"
                        name="First-Name"
                        id="First-Name"
                        placeholder="Enter First Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlInput2">
                      <Form.Label>Last Name*</Form.Label>
                      <Form.Control
                        name="Last-Name"
                        id="Last-Name"
                        type="text"
                        placeholder="Enter last Name"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlInput3">
                      <Form.Label>Email address*</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlInput4">
                      <Form.Label>Phone Number*</Form.Label>
                      <Form.Control
                        type="number"
                        name="Phone-Number"
                        id="Phone-Number"
                        placeholder="Enter Phone Number"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="Message"
                    id="Message"
                    placeholder="Type Your Message"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="col-sm-12 mb-3"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
            <Col sm="12" xs="12" lg="4" md="4">
              <Container fluid>
                <div>
                  <h4 className="text-light text-center">Reach Us</h4>
                </div>
                <div>
                  <Container fluid>
                    <Row>
                      <Col lg="12" md="12" sm="4" xs="4" className="pt-4 pb-4">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Button
                            variant="light"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            onClick={() => {
                              window.open(
                                "https://www.instagram.com/prayatech/",
                                "_blank"
                              );
                            }}
                          >
                            <FiInstagram />
                          </Button>
                          <div
                            className="text-light"
                            style={{ fontSize: "14px" }}
                          >
                            Instagram
                          </div>
                        </div>
                      </Col>
                      <Col lg="12" md="12" sm="4" xs="4" className="pt-4 pb-4">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Button
                            variant="light"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            onClick={() => {
                              window.open(
                                "https://www.linkedin.com/company/praya-tech/",
                                "_blank"
                              );
                            }}
                          >
                            <FiLinkedin />
                          </Button>
                          <div
                            className="text-light"
                            style={{ fontSize: "14px" }}
                          >
                            LinkedIn
                          </div>
                        </div>
                      </Col>
                      <Col lg="12" md="12" sm="4" xs="4" className="pt-4 pb-4">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Button
                            variant="light"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            onClick={() => {
                              window.location.href =
                                "mailto:techpraya@gmail.com";
                            }}
                          >
                            <FiMail />
                          </Button>
                          <div
                            className="text-light"
                            style={{ fontSize: "14px" }}
                          >
                            Mail
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
