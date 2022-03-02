import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";


function Footer() {

  return (
    <Container fluid className="cardbackground ooter column1">
        <Row className="row1">
            <Col sm={8} className="footerbackground column1">
            </Col>
            <Col sm={4} className="column2">
                <Stack gap={4}>
                    <div className="row2">
                        <h3>Contact Me</h3>
                    </div> 
                    <Stack gap={1}>
                            <div className="row2">
                                <h5>LinkedIn</h5>
                            </div> 
                            <div className="row2">
                                <h5>GitHub</h5>
                            </div> 
                            <div className="row2">
                                <h5>Instagram</h5>
                            </div> 
                        </Stack>
                    </Stack>
            </Col>
        </Row>
        <Row>
            <div className="div2" > 
                <h5>Designed and Developed by Adrian Chin</h5>
            </div>
        </Row>
    </Container> 
  );
}

export default Footer;