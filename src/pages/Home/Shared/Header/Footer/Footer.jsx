import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5">
        <Container>
          <Row>
            <Col className="text-center py-3">
              <p>Copyright © {new Date().getFullYear()}
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;