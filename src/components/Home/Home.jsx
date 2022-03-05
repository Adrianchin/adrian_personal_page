import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";

function Frontpage () {
    
    return (
        <div className="home">
            <Container className="homecontainer container1">
                    <Row className="homealign row1" >
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
                    </Row>
            </Container> 
        </div>
    );
}

export default Frontpage;