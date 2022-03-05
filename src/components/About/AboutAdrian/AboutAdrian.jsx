import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";
import mePicture from "../../../information/pictures/me_sexy.jpg";

function AboutAdrian () {
    return (
        <Container fluid className="generalcontainer1">
            <Row className="generalrow1">
                <div className={"generaldiv1 row1"} >
                    <Row className="aboutmeinformation">
                        <Col md={4} >
                                <img 
                                src={mePicture} 
                                className="aboutmehomebox"
                                />
                        </Col>
                        <Col className="hellobox">
                            <h2 className="aboutmedesctiption">
                            Highwood Pass is a mountain pass in Kananaskis Country, Alberta, Canada. It lies west of Mount Rae and Mount Arethusa of the Misty Range, south of the Elbow Pass.  
                            </h2>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>
    );
}

export default AboutAdrian;