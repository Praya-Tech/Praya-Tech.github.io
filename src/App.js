import React from "react";
import "./App.css";
import NavbarTop from "./Components/NavbarTop";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <NavbarTop />
      <Home />
    </div>
  );
}

export default App;
