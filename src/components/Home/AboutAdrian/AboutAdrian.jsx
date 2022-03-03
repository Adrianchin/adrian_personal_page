import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";
import mePicture from "../../../information/pictures/me_picture.jpg";

function AboutAdrian () {
    return (
        <Container fluid className="generalcontainer1">
            <Row className="generalrow1">
                <div className={"generaldiv1 row1"} >
                    <Row>
                        <h1 className="generaltitle1 row2">
                            Adrian Chin
                        </h1>
                    </Row>
                    <Row className="aboutmeinformation">
                        <Col md={4} className="aboutmehomebox" >
                                <img 
                                src={mePicture} 
                                className="img-thumbnail"
                                />
                        </Col>
                        <Col md={8} className="hellobox">
                            <h2 className="aboutmedesctiption">
                            Highwood Pass is a mountain pass in Kananaskis Country, Alberta, Canada. It lies west of Mount Rae and Mount Arethusa of the Misty Range, south of the Elbow Pass. It lies within the Peter Lougheed Provincial Park on Alberta Highway 40. The Highwood River originates in the pass. 
                            </h2>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>
    );
}

export default AboutAdrian;