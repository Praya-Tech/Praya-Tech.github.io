import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { FiInstagram, FiGithub, FiLinkedin, FiUser } from "react-icons/fi";
import Particles from "react-particles-js";

const About = () => {
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
      portfolio: "",
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
    <>
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
                value: 200,
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
        <div
          className="p-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="#story">
            <Button variant="dark" className="pr-4 pl-4 pt-2 pb-2">
              Our Story
            </Button>
          </a>
        </div>
      </div>
      <div className="bg-dark" id="story">
        <h1 className="text-center text-light p-1">Our Story</h1>
        <div>
          <div className=" container text-light pb-3 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            nisi ad quos consectetur neque laudantium voluptates adipisci nobis
            accusantium natus minus praesentium doloribus, repudiandae commodi
            voluptas corrupti odio quod expedita magnam ipsa tempora! Voluptatum
            incidunt commodi officiis aut iure beatae deserunt quaerat quos
            quas, quo optio repudiandae voluptatem labore officia!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nostrum hic repellat aliquid eum optio neque nam nisi delectus
            distinctio! Soluta corrupti officiis alias inventore corporis
            distinctio sed pariatur adipisci reprehenderit exercitationem eius,
            eum, iure odio velit voluptatum necessitatibus omnis suscipit
            incidunt neque eligendi? Quibusdam, quae. Asperiores qui maiores
            repellat necessitatibus! Quae provident corporis molestias pariatur
            eos obcaecati saepe impedit in magni animi nemo possimus vitae sequi
            illo magnam, aliquid a sint reprehenderit sit totam culpa maxime!
            Nobis asperiores pariatur iusto quibusdam iste ipsum tempora fugit
            nostrum ad corrupti distinctio quae incidunt consequatur nemo sit
            repellat, perferendis harum quas. Aperiam.
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
