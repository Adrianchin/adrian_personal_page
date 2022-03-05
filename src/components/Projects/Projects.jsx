import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";

import ProjectBackgroundPicture from "./ProjectBackground/ProjectBackground";
import Projectcards from "./Projectcards/Projectcards";

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
                            <Projectcards/>
                        </Stack>
                    </Col>
            </Container>
        </section>
    );
}

export default Projects;