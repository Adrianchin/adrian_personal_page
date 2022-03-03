import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";

function Languages () {
    return(
        <Container fluid className="generalcontainer1">
            <Row className="generalrow1">
                <div className={"generaldiv"} >
                    <Row>
                        <h1 className="generaltitle1">
                            Languages
                        </h1>
                    </Row>
                    <Row>
                        <Col md={6} className="column1">
                            <p className="projectdescription">
                                <strong>English</strong>
                            </p>
                            <p className="projectdescription">
                                Native N1
                            </p>
                        </Col>
                        <Col md={6} className="column1">
                            <p className="projectdescription">
                                <strong>Japanese</strong>
                            </p>
                            <p className="projectdescription">
                                Professionally Competent
                            </p>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>
    );
}
export default Languages;