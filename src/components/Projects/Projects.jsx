import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";

import ProjectBackgroundPicture from "./ProjectBackground/ProjectBackground";

import Fuji from "../../information/pictures/Fuji3.png";
import Sakura from "../../information/pictures/Sakura.jpg";
import Sakura3 from "../../information/pictures/Sakura3.png";

function Projects () {

    return (
        <section>
            <ProjectBackgroundPicture/>
            <Container fluid className="projectcontainer"> 
                    <Col md={7}>
                    </Col>
                    <Col md={5}>
                        <Stack gap={2} className="projectstack">
                            <Row>
                                <h1 className="projecttitle">
                                    Projects
                                </h1>
                            </Row>
                            <Row>
                                <Col md={7}>
                                    <div className="projectdescription column1">
                                        <h5 className="projectname">
                                            Hello!
                                        </h5>
                                        <p className="projectdetails">
                                            This is my project
                                        </p>
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div className="projectcard column1">
                                        <img 
                                            src={Fuji} 
                                            className="img-fluid"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={7}>
                                    <div className="projectdescription column1">
                                        <h5 className="projectname">
                                            Hello!
                                        </h5>
                                        <p className="projectdetails">
                                            This is my project
                                        </p>
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div className=" column1">
                                        <img 
                                            src={Sakura} 
                                            className="img-fluid"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={7}>
                                    <div className="projectdescription column1">
                                        <h5 className="projectname">
                                            Hello!
                                        </h5>
                                        <p className="projectdetails">
                                            This is my project
                                        </p>
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div className="projectcard column1">
                                        <img 
                                            src={Sakura3} 
                                            className="img-fluid"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Stack>
                    </Col>
            </Container>
        </section>
    );
}

export default Projects;