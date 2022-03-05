import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";

const Header = () => {
    return (
        <section>
            <Container fluid className="headercontainer">
                    <Row className="titlerow ">
                        <div style={{textAlign: "center" }}>
                            <h1>Adrian Chin</h1>
                            <h1>Full Stack Developer</h1>
                            <h1>Mechanical Engineer</h1>
                            <h1>Triathlete</h1>
                            {/*<Type/>*/}
                        </div>
                    </Row>
            </Container>
        </section>
    );
}

export default Header;