import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

const Footer = () => {
  return (
    <div>
      <Container fluid className="bg-dark pb-2">
        <div className="text-light text-center footer">
          Copyright &copy; 2020 PrayaTech. All Rights Reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
