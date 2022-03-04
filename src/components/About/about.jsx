import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";
import mePicture from "../../information/pictures/me_picture.jpg";

import Header from "./Header/Header"
import BackgroundPic from './BackgroundPic/BackgroundPic';
import Languages from './Languages/Languages';
import AboutAdrian from './AboutAdrian/AboutAdrian';
import Education from './Education/Education';
import DeveloperTools from './DeveloperTools/DeveloperTools';
import GitHub from './GitHub/GitHub';

function About () {

    return (
        <section>
            <Container className="column2">
                        <BackgroundPic/>
                        <Header/>
                        <AboutAdrian/>
                        <Languages/>
                        <Education/>
                        <DeveloperTools/>
                        <GitHub/>
            </Container>
        </section>
    );
}

export default About;