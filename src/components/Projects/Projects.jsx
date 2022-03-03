import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";

import Fuji from "../../information/pictures/Fuji3.png";
import Sakura from "../../information/pictures/Sakura.jpg";
import Sakura3 from "../../information/pictures/Sakura3.png";

function Projects () {

    return (
        <Container fluid className="generalcontainer1">
            <Row className="generalrow1">
                <div className={"generaldiv"} >
                    <Row>
                        <h1 className="generaltitle1">
                            Projects
                        </h1>
                    </Row>
                    <Row className="align-items-center">
                        <Col md={8} className="column1">
                                <img 
                                    src={Fuji} 
                                    className="img-fluid"
                                />
                                <h5 className="projecttitle">
                                    Hello!
                                </h5>
                                <p className="projectdescription">
                                    This is my project
                                </p>
                        </Col>
                        <Col md={4} className="column1">
                                <img 
                                    src={Sakura} 
                                    className="img-fluid"
                                />
                                <h5 className="projecttitle">
                                    Hello!
                                </h5>
                                <p className="projectdescription">
                                    This is my project
                                </p>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col md={12} className="column1">
                            <img 
                                src={Sakura3} 
                                className="img-fluid"
                            />
                            <h5 className="projecttitle">
                                Hello!
                            </h5>
                            <p className="projectdescription">
                                This is my project
                            </p>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>
    );
}

export default Projects;