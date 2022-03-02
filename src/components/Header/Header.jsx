import React from 'react';
import { Container, Row } from "react-bootstrap";

const Header = () => {
    return (
        <section>
            <Container fluid className="titlemain">
                <Row className="titlerow ">
                    <h1 className="titlemainname">
                        Adrian Chin
                    </h1>
                </Row>
            </Container>
        </section>
    );
}

export default Header;