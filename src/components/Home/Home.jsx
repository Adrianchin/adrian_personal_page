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

const Home = () => {
    return (
        <section>

            <Header/>
            <BackgroundPic/>
            <Container>
                <Row className="Row2">
                <AboutAdrian/>
                <Languages/>
                <Education/>
                <DeveloperTools/>
                <GitHub/>
                </Row>
            </Container>
        </section>
    );
}

export default Home;