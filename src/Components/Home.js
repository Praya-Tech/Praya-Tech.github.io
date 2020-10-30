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
import {
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiMail,
  FiUser,
} from "react-icons/fi";
const Home = () => {
  const navHeight = 54;
  var n = window.screen.width > 420 ? 400 : 100;
  var h1 = window.screen.width > 420 ? "500%" : "110%";
  const members = [
    {
      name: "Vishak Amin",
      linkedin: "https://www.linkedin.com/in/vishak-amin-591078183/",
      instagram: "https://www.instagram.com/itsvishak/",
      github: "https://github.com/VishakAmin",
      portfolio: "https://vishakamin.github.io/",
      image:
        "https://avatars1.githubusercontent.com/u/33172934?s=400&u=3d974bc102b7986cc5eebb56fba25593ef465870&v=4",
    },
    {
      name: "Jayraj Shah",
      linkedin: "https://www.linkedin.com/in/jjs1999/",
      instagram: "https://www.instagram.com/jjs_straight_outta_hell/",
      github: "https://github.com/JayrajShah",
      portfolio: "https://jayrajshah.github.io/",
      image:
        "https://avatars3.githubusercontent.com/u/33173075?s=460&u=86e85ed36c348977a899cb36cb8a9dfe226dda37&v=4",
    },
    {
      name: "Mayuresh Kunder",
      linkedin: "https://www.linkedin.com/in/mayuresh-kunder-7b1076183/",
      instagram: "https://www.instagram.com/mayuresh024/",
      github: "https://github.com/mayur249",
      portfolio: "https://mayur249.github.io/",
      image:
        "https://avatars0.githubusercontent.com/u/44720608?s=460&u=13157c1b04628b74f26e74d7b97adce54e9e353d&v=4",
    },
    {
      name: "Dikshit Kotian",
      linkedin: "https://www.linkedin.com/in/dikshit-kotian/",
      instagram: "https://www.instagram.com/dikshit.kotian/",
      github: "https://github.com/dikshitkotian21",
      portfolio: "",
      image:
        "https://avatars0.githubusercontent.com/u/43279426?s=460&u=d3121a10ec9c955a77ca80b225c03d8f81bf74f1&v=4",
    },
  ];
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
        id="home"
        style={{ height: "90vh", display: "flex", alignItems: "center" }}
      >
        <div className="landing__container">
          <img src="PRAYA_1024.png" alt="P" className="landing__logo" />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              flexDirection: "column",
              marginLeft: "1rem",
            }}
          >
            <div className="text-dark landing__title">PRAYA TECH</div>
            <div className="landing__subtitle text-dark text-center">
              Helping businesses to scale up in the Digital World.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark " id="story">
        <div className="pb-3">
          <h1 className="text-center text-light p-4">Who are we?</h1>
          <div>
            <div
              className=" container text-light  pb-3 "
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              PrayaTech is an IT consulting company located in India. We are a
              software development company that focuses on the development of
              most advanced websites and mobile apps. Also we help business to
              scale up in this digital world by applying our effective digital
              marketing strategies.
              <br />
              <br />
              We follow that to create a great website or a mobile application,
              the main key point is to really understanding of what clients
              wants. We always care about the final outcome and out clients
              successes with the code which we write for them.
              <br />
              <br />
              We use the most advanced technolgies to make website blazing fast,
              SEO friendly and responsive at same time. We know that even having
              a fastest bike in the world is nothing if it doesn't have fuel. So
              we focus greatly on SEO Details to make websites rank higest in
              search results and make it easy to find for targeted customers.
              <br />
              <a href="#contact">Lets Discuss</a> your business and we will help
              you to grow it exponentially.
            </div>
          </div>
        </div>
      </section>

      <section className="" id="services">
        <Container fluid>
          <h1 className="text-center p-4 ">Services</h1>
          <div>
            <CardDeck>
              <Card className="text-dark">
                <Card.Img
                  variant="top"
                  src="multiple-devices.png"
                  height="100px"
                  style={{ objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>Web Development</Card.Title>
                  <Card.Text>
                    Our dedicated team uses cutting edge Tech Stack to develop
                    Custom website that are blazing fast.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="bg-light text-dark">
                <Card.Img
                  variant="top"
                  src="iphone-x.png"
                  height="100px"
                  style={{ objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>Mobile Development</Card.Title>
                  <Card.Text>
                    You want an dedicated app for your business. No worries, we
                    provide iOS and Android app development services to create
                    applications with any imaginable features.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="bg-light text-dark">
                <Card.Img
                  variant="top"
                  src="shopping-cart-loaded.png"
                  height="100px"
                  style={{ objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>eCommerce</Card.Title>
                  <Card.Text>
                    We provide eCommerce solution to help your business scale
                    up. We help to develop a better digital shopping experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
          <div className="pt-4 pb-5">
            <CardDeck>
              <Card className="bg-light text-dark">
                <Card.Img
                  variant="top"
                  src="administrator-male.png"
                  height="100px"
                  style={{ objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>IT Consulting</Card.Title>
                  <Card.Text>
                    Our dedicated team will drive your business in the right
                    direction, by helping you move away from traditional
                    approaches to more unique and sophisticated solutions.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="bg-light text-dark">
                <Card.Img
                  variant="top"
                  src="statistics.png"
                  height="100px"
                  style={{ objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>SEO</Card.Title>
                  <Card.Text>
                    We build website using best SEO practices, ensuring better
                    SEO performance and improved ranking on search engines.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="bg-light text-dark">
                <Card.Img
                  variant="top"
                  src="invert-colors.png"
                  height="100px"
                  style={{ objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>UX/UI Design</Card.Title>
                  <Card.Text>
                    We understand that building a great interface goes way
                    beyond just making it beautiful. A well-designed user
                    interface makes your system easier and more enjoyable to
                    use.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
        </Container>
      </section>

      <section id="projects" className=" bg-dark pt-2 pb-4">
        <Container fluid>
          <h1 className="text-center text-light p-4">Projects</h1>
          <div>
            <CardDeck>
              <Card bg="light">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  height="320px"
                />
                <Card.Body className="text-dark">
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

              <Card bg="light">
                <Card.Img
                  height="320px"
                  variant="top"
                  src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                <Card.Body className="text-dark">
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
              <Card bg="light">
                <Card.Img
                  height="320px"
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2015/10/31/12/00/financial-equalization-1015305_960_720.jpg"
                />
                <Card.Body className="text-dark">
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

      <section id="team">
        <div>
          <h1 className="text-center m-2 text-dark">Meet the Members</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: window.screen.width >= 990 ? "row" : "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {members.map((member) => (
            <Card style={{ width: "18rem", margin: "1rem" }}>
              <Card.Img variant="top" src={member.image} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="light"
                      style={{ display: "flex" }}
                      onClick={() => {
                        window.open(member.instagram, "_blank");
                      }}
                    >
                      <FiInstagram />
                    </Button>
                    <div style={{ fontSize: "10px" }}>Instagram</div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="light"
                      style={{ display: "flex" }}
                      onClick={() => {
                        window.open(member.linkedin, "_blank");
                      }}
                    >
                      <FiLinkedin />
                    </Button>
                    <div style={{ fontSize: "10px" }}>Linkedin</div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="light"
                      style={{ display: "flex" }}
                      onClick={() => {
                        window.open(member.github, "_blank");
                      }}
                    >
                      <FiGithub />
                    </Button>
                    <div style={{ fontSize: "10px" }}>Github</div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="light"
                      style={{ display: "flex" }}
                      onClick={() => {
                        window.open(member.portfolio, "_blank");
                      }}
                    >
                      <FiUser />
                    </Button>
                    <div style={{ fontSize: "10px" }}>Portfolio</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-dark" id="contact">
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
                        name="email"
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
