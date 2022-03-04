import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";

function Education () {
    return (
        <Container fluid className="generalcontainer1">
            <Row className="generalrow1">
                <div className={"generaldiv"} >
                    <Row>
                        <h1 className="generaltitle1">
                            Education
                        </h1>
                    </Row>
                    <Row>
                        <Col md={6} className="column1">
                            <p className="projectdescription">
                                <strong>University of Calgary</strong>
                            </p>
                            <p className="projectdescription">
                                Bachlor of Mechanical Engineering - 2019
                            </p>
                        </Col>
                        <Col md={6} className="column1">
                            <p className="projectdescription">
                                <strong>InceptionU</strong>
                            </p>
                            <p className="projectdescription">
                                Full Stack Development Program - 2022
                            </p>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>
    );
}
export default Education;