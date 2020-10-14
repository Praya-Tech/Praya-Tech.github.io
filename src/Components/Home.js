import React from "react";
import Particles from "react-particles-js";
import "../App.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import { iconList } from "./techStackIcons";
import "./home.css";

const Home = () => {
  const navHeight = 54;
  var n = window.screen.width > 420 ? 260 : 80;
  return (
    <div>
      <Particles
        style={{ position: "absolute", zIndex: "-1" }}
        height="450%"
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
              value: 4,
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
            <div className="landing__subtitle text-dark">
              Helping bussiness to scale in the online world.
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

      <section id="techstack" className="pt-3">
        <Container>
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
    </div>
  );
};

export default Home;
