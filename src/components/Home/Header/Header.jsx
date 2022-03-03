import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";

const Header = () => {
    return (
        <section>
            <Container fluid className="titlemain">
                <Col md={5}>
                    <Row className="titlerow ">
                        <div style={{ padding: 50, textAlign: "right" }}>
                            <Type/>
                        </div>
                    </Row>
                </Col>
                <Col md={5}>
                </Col>
            </Container>
        </section>
    );
}

export default Header;