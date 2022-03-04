import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";

const Header = () => {
    return (
        <section>
            <Container fluid className="titlemain">
                <Col md={6}>
                    <Row className="titlerow ">
                        <div style={{ padding: 50, textAlign: "right" }}>
                            <h1>Full Stack Developer</h1>
                            <h1>Mechanical Engineer</h1>
                            <h1>Triathlete</h1>
                            {/*<Type/>*/}
                        </div>
                    </Row>
                </Col>
                <Col md={6}>
                </Col>
            </Container>
        </section>
    );
}

export default Header;