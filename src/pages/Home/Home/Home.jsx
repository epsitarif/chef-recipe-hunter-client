import React from "react";
import { Col, Row } from "react-bootstrap";
import LeftNav from "../Shared/LeftNav/LeftNav";
import RightNav from "../Shared/RightNav/RightNav";

const Home = () => {
  return (
    <div>
      <Row>
        <Col lg={6}>
          <LeftNav></LeftNav>
        </Col>
        <Col lg={6}>
          <RightNav></RightNav>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
