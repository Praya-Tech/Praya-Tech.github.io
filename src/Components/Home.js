import React from "react";
import Particles from "react-particles-js";
import "../App.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";

const Home = () => {
  const navHeight = 54;
  var n = window.screen.width > 420 ? 160 : 80;
  return (
    <div>
      <Particles
        style={{ position: "absolute", zIndex: "-1" }}
        height="100%"
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
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <img
            src="PRAYA_1024.png"
            alt="P"
            style={{ objectFit: "contain", height: "15%", width: "15%" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "space-evenly",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "10vw" }} className="text-dark">
              PRAYA TECH
            </div>
            <div style={{ fontSize: "2vw" }} className="text-dark">
              Helps scaling businesses in the online world.
            </div>
          </div>
        </div>
      </section>

      <section
        class=""
        style={{ backgroundColor: "#2C3335", height: "100vh" }}
        id="services"
      >
        <Container fluid>
          <h1 class="text-center text-light p-4 ">Services</h1>
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
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
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
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
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
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Container>
      </section>
    </div>
  );
};

export default Home;
