import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container fluid className="bg-dark pb-2">
        <div className="text-light text-center">
          Copyright &copy; 2020 PrayaTech. All Rights Reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
