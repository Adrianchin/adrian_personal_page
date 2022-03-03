import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";
import GithubCal from "../Other/GithubCal";

function GitHub () {
    
    return (

        <Container fluid className="generalcontainer1">
            <Row className="generalrow1">
                <div className={"generaldiv"} >
                    <Row>
                        <h1 className="generaltitle1">
                            GitHub
                        </h1>
                    </Row>
                    <Row>
                    <Col className="column1">
                            <GithubCal/>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>
    );
}

export default GitHub;