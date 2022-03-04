import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJsBadge,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiBootstrap,
} from "react-icons/di";

function ProfessionalTools() {
  return (
    <Row style={{ justifyContent: "center"}}>
      <Col xs={4} md={3} className="tool-icons">
        <DiReact/>
      </Col>
      <Col xs={4} md={3} className="tool-icons">
        <DiJsBadge />
      </Col>
      <Col xs={4} md={3} className="tool-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={3} className="tool-icons">
        <DiMongodb/>
      </Col>
      <Col xs={4} md={3} className="tool-icons">
        <DiBootstrap/>
      </Col>
      <Col xs={4} md={3} className="tool-icons">
        <DiPython />
      </Col>
    </Row>
  );
}

export default ProfessionalTools;