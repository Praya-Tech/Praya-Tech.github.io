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
      <About />
    </div>
  );
}

export default App;
