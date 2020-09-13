import React from "react";
import "./App.css";
import NavbarTop from "./Components/NavbarTop";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
import About from "./Components/About";

function App() {
  return (
    <div>
      <NavbarTop />
      <Image
        src="https://tqcoders.com/static/cc1ced5b5ddaafc4ca56cced96d333c7/3897f/back.png"
        fluid
      />
      <About />
      <p>Praya Tech</p>
    </div>
  );
}

export default App;
