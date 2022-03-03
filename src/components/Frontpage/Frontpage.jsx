import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";

function Frontpage () {
    
    return (
        <div className="Frontpage">
            <Container className="frontpagecontainer container1">
                    <Row className="frontpagealign row1" >
                        <Col md={4} className="column1">
                            <Row>
                                <p>About</p>
                            </Row>
                            <Row>
                                <p>Work</p>
                            </Row>
                            <Row>
                                <p>Contact</p>
                            </Row>
                        </Col>
                        <Col md={8} className="column1">
                            <p>test</p>
                        </Col>
                    </Row>
            </Container> 
        </div>
    );
}

export default Frontpage;